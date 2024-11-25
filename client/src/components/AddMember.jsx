/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: "0.8rem",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: "none",
};

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

export default function AddMember({ open, toggleModal }) {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            role: 'admin',
            status: 'active',
            permissions: {
                create: false,
                manage: false,
                edit: false,
                view: false,
                remove: false,
            },
        },
        validate,
        onSubmit: (values) => {
            //TODO: Send to backend
            console.log(values);
        },
    });

    return (
        <div>
            <Modal
                open={open}
                onClose={() => toggleModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} width={{xs:"100%", sm:"50%"}}>
                    <form onSubmit={formik.handleSubmit}>
                        <h1 className="text-2xl font-semibold">Add a new member</h1>
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

                        <div className="grid sm:grid-cols-2 sm:gap-6 mb-4">
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
                                    <option value="inactive" onSelect={(e) => handleSelect(e.target.value)}>Inactive</option>
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

                        <div className="grid sm:grid-cols-2 sm:gap-6 mt-6">
                            <button
                                type="submit"
                                className="py-2 cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 border border-indigo-500 rounded-lg my-1 transition-all">
                                Add
                            </button>
                            <button
                                type="reset"
                                className="py-2 cursor-pointer bg-white text-indigo-500 hover:bg-indigo-100 border border-indigo-500 rounded-lg my-1 transition-all"
                                onClick={() => toggleModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
