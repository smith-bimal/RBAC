/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useEffect } from "react";
import apiRequest from "../lib/apiRequest";

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Full Name is required";
    } else if (values.name.length > 50) {
        errors.name = "Full Name must be 50 characters or less";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.role) {
        errors.role = "Role is required";
    } else if (!["admin", "editor", "viewer"].includes(values.role)) {
        errors.role = "Invalid role selected";
    }

    if (!values.status) {
        errors.status = "Status is required";
    } else if (!["active", "inactive"].includes(values.status)) {
        errors.status = "Invalid status selected";
    }

    if (!Object.values(values.permissions).includes(true)) {
        errors.permissions = "At least one permission must be selected";
    }

    return errors;
};

const EditForm = ({ editMember, setEditMember, setDrawerOpen }) => {
    const formik = useFormik({
        initialValues: {
            name: editMember.name || '',
            email: editMember.email || '',
            role: editMember.role?.toLowerCase() || 'admin',
            status: editMember.status?.toLowerCase() || 'active',
            permissions: {
                create: editMember.permissions?.create || false,
                manage: editMember.permissions?.manage || false,
                edit: editMember.permissions?.edit || false,
                view: editMember.permissions?.view || false,
                remove: editMember.permissions?.remove || false,
            },
        },
        validate,
        onSubmit: (values) => {
            apiRequest.put(`members/${values.email}`, values)
                .then((response) => {
                    console.log(response);
                }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    setDrawerOpen(false);
                    setEditMember({});
                })
        },
    });

    useEffect(() => {
        handleSelect(formik.values.role);
    }, [formik.values.role]);

    const handleSelect = (value) => {
        if (value === "admin") {
            formik.setFieldValue("permissions.create", true);
            formik.setFieldValue("permissions.manage", true);
            formik.setFieldValue("permissions.edit", true);
            formik.setFieldValue("permissions.view", true);
            formik.setFieldValue("permissions.remove", true);
        } else if (value === "editor") {
            formik.setFieldValue("permissions.create", true);
            formik.setFieldValue("permissions.manage", false);
            formik.setFieldValue("permissions.edit", true);
            formik.setFieldValue("permissions.view", true);
            formik.setFieldValue("permissions.remove", false);
        } else if (value === "viewer") {
            formik.setFieldValue("permissions.create", false);
            formik.setFieldValue("permissions.manage", false);
            formik.setFieldValue("permissions.edit", false);
            formik.setFieldValue("permissions.view", true);
            formik.setFieldValue("permissions.remove", false);
        }
    };

    return (
        <div className="p-6 font-semibold sm:w-[500px]">
            <h2 className="text-xl mb-6">Edit Member Info <span className="text-slate-500">({editMember.userId})</span></h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="grid">
                    <div>
                        <label htmlFor="name" className="leading-9 block font-normal">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter name"
                            className="bg-slate-100 border p-2 outline-none rounded-lg w-full"
                            value={formik.values.name}
                            onChange={formik.handleChange} />
                        {formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
                    </div>

                    <div>
                        <label htmlFor="email" className="leading-9 block font-normal">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            className="bg-slate-100 border p-2 outline-none rounded-lg w-full"
                            value={formik.values.email}
                            onChange={formik.handleChange} />
                        {formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 sm:mb-4">
                    <div>
                        <label htmlFor="role" className="leading-9 block font-normal">Assign Role</label>
                        <select
                            name="role"
                            id="role"
                            className="bg-slate-100 border p-2 outline-none rounded-lg w-full"
                            value={formik.values.role}
                            onChange={formik.handleChange}>
                            <option value="admin" onSelect={(e) => handleSelect(e.target.value)}>Admin</option>
                            <option value="editor" onSelect={(e) => handleSelect(e.target.value)}>Editor</option>
                            <option value="viewer" onSelect={(e) => handleSelect(e.target.value)}>Viewer</option>
                        </select>
                        {formik.errors.role ? <div className="text-red-500">{formik.errors.role}</div> : null}
                    </div>

                    <div>
                        <label htmlFor="status" className="leading-9 block font-normal">Status</label>
                        <select
                            name="status"
                            id="status"
                            className="bg-slate-100 border p-2 outline-none rounded-lg w-full"
                            value={formik.values.status}
                            onChange={formik.handleChange}>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        {formik.errors.status ? <div className="text-red-500">{formik.errors.status}</div> : null}
                    </div>
                </div>

                <label htmlFor="permissions" className="leading-9 block font-normal">Permissions</label>
                <div className="grid grid-cols-2 gap-4 whitespace-nowrap">
                    {['create', 'manage', 'edit', 'view', 'remove'].map(permission => (
                        <div key={permission} className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                id={permission}
                                name={`permissions.${permission}`}
                                className="w-4 h-4"
                                checked={formik.values.permissions[permission]}
                                onChange={formik.handleChange} />
                            <label htmlFor={permission}>{`${permission.charAt(0).toUpperCase() + permission.slice(1)} Posts`}</label>
                        </div>
                    ))}
                </div>
                {formik.errors.permissions ? <div className="text-red-500">{formik.errors.permissions}</div> : null}

                <div className="grid grid-cols-2 gap-6 mt-6">
                    <button
                        type="submit"
                        className="py-2 cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 border border-indigo-500 rounded-lg my-1 transition-all">
                        Save
                    </button>
                    <button
                        type="reset"
                        className="py-2 cursor-pointer bg-white text-indigo-500 hover:bg-indigo-100 border border-indigo-500 rounded-lg my-1 transition-all"
                        onClick={() => setDrawerOpen(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditForm;
