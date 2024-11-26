import { useState } from "react";
import DeleteModal from "./DeleteModal";

/* eslint-disable react/prop-types */
function getPermissionType(value) {
    if (value.create && value.manage && value.edit && value.view && value.remove) {
        return "Full Access";
    }
    else if (value.create && !value.manage && value.edit && value.view && !value.remove) {
        return "Read and Write";
    }
    else if (!value.create && !value.manage && !value.edit && value.view && !value.remove) {
        return "Read Only";
    }
    else {
        return "Limited Access";
    }
}

const MembersTable = ({ members, itemsPerPage, handleEditClick, setEditMember, modalOpen, setModalOpen }) => {
    const [deleteMember, setDeleteMember] = useState({});

    return (
        <>

            {
                members.length === 0 ?
                    <p className="text-center leading-10">No members added</p>
                    :
                    <div className="w-full overflow-auto">
                        <table className="w-full text-sm">
                            <thead className="text-slate-500 mb-4">
                                <tr>
                                    <th className="px-2 md:px-4 py-2 md:text-center text-left sticky left-0 z-10 bg-white">Account</th>
                                    <th className="px-2 md:px-4 py-2 text-left">User ID</th>
                                    <th className="px-2 md:px-4 py-2 text-left">Role</th>
                                    <th className="px-2 md:px-4 py-2 text-left">Status</th>
                                    <th className="px-2 md:px-4 py-2 text-left">Permissions</th>
                                    <th className="px-2 md:px-4 py-2 text-left">Created on</th>
                                    <th className="px-2 md:px-4 py-2 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="whitespace-nowrap">
                                {
                                    members.map((member) =>
                                        <tr className="border-t relative" key={member.userId}>
                                            <td className="px-2 md:px-4 py-2 sticky left-0 z-10 bg-white">
                                                <div className="flex items-center">
                                                    <img src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="" className="h-10 w-10 sm:block hidden rounded-full object-cover mr-4" />
                                                    <div className="overflow-hidden">
                                                        <p>{member.name}</p>
                                                        <p className="font-normal text-slate-500 truncate w-28 sm:w-full">{member.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-2 md:px-4 py-2">{member.userId}</td>
                                            <td className="px-2 md:px-4 py-2">{member.role.slice(0, 1).toUpperCase() + member.role.slice(1, member.role.length)}</td>
                                            <td className="px-2 md:px-4 py-2">
                                                <div className="flex items-center">
                                                    <div className={`mr-2 h-2 w-2 rounded-full ${member.status === "active" ? "bg-green-400" : "bg-orange-400"}`}></div>{member.status.slice(0, 1).toUpperCase() + member.status.slice(1, member.status.length)}
                                                </div>
                                            </td>
                                            <td className="px-2 md:px-4 py-2">{getPermissionType(member.permissions)}</td>
                                            <td className="px-2 md:px-4 py-2">{member.createdOn.split("T")[0]}</td>
                                            <td className="cursor-pointer p-2 w-fit">
                                                <div className="flex items-center justify-center">
                                                    <button
                                                        className="ps-3 pr-4 py-2 cursor-pointer hover:bg-indigo-100 text-indigo-500 rounded-lg my-1 transition-all"
                                                        onClick={() => {
                                                            handleEditClick();
                                                            setEditMember(member);
                                                        }}
                                                    >
                                                        <i className="ri-edit-line mr-2"></i>Edit
                                                    </button>
                                                    <button
                                                        className="ps-3 pr-4 py-2 cursor-pointer hover:bg-red-100 text-red-500 rounded-lg my-1 transition-all"
                                                        onClick={() => {
                                                            setDeleteMember(member);
                                                            setModalOpen(true);
                                                        }}
                                                    >
                                                        <i className="ri-delete-bin-6-line mr-2"></i>Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ).slice(0, itemsPerPage)
                                }
                            </tbody>
                        </table>
                    </div>
            }
            <DeleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} deleteMember={deleteMember} />
        </>
    )
}

export default MembersTable;
