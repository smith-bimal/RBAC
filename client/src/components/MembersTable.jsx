/* eslint-disable react/prop-types */
const MembersTable = ({ members, itemsPerPage }) => {
    return (
        <table className="w-full text-sm">
            <thead className="text-slate-500 mb-4">
                <tr>
                    <td>User ID</td>
                    <td>Account</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td>Permissions</td>
                    <td>Created on</td>
                    <td className="text-center">Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    members.map((member) =>
                        <tr className="border-t relative" key={member.userId}>
                            <td>{member.userId}</td>
                            <td>
                                <div className="flex items-center">
                                    <img src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="" className="h-10 w-10 rounded-full object-cover mr-4"/>
                                    <div>
                                        <p>{member.name}</p>
                                        <p className="font-normal text-slate-500">{member.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{member.role}</td>
                            <td>
                                <div className="flex items-center">
                                    <div className={`mr-2 h-2 w-2 rounded-full ${member.status === "Active" ? "bg-green-400" : "bg-orange-400"}`}></div>{member.status}
                                </div>
                            </td>
                            <td>{member.permissions}</td>
                            <td>{member.createdOn}</td>
                            <td className="cursor-pointer p-2 w-fit">
                                <div className="flex items-center justify-center">
                                    <p className=" ps-3 pr-4 py-2 cursor-pointer hover:bg-indigo-100 text-indigo-500 rounded-lg my-1 transition-all"><i className="ri-edit-line mr-2"></i>Edit</p>
                                    <p className="ps-3 pr-4 py-2 cursor-pointer hover:bg-red-100 text-red-500 rounded-lg my-1 transition-all"><i className="ri-delete-bin-6-line mr-2"></i>Delete</p>
                                </div>
                            </td>
                        </tr>
                    ).slice(0, itemsPerPage)
                }
            </tbody>
        </table>
    )
}

export default MembersTable