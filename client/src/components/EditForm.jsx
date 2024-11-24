/* eslint-disable react/prop-types */
const EditForm = ({ editMember, setDrawerOpen }) => {
    return (
        <div className="p-6 font-semibold sm:w-[500px]">
            <h2 className="text-xl mb-6">Edit Member Info <span className="text-slate-500">({editMember.userId})</span></h2>
            <form action="#">
                <div className="grid">
                    <div>
                        <label htmlFor="name" className="leading-9 block font-normal">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter name"
                            className="bg-slate-100 border p-2 outline-none rounded-lg w-full"
                            value={editMember.name} />
                    </div>

                    <div>
                        <label htmlFor="email" className="leading-9 block font-normal">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            className="bg-slate-100 border p-2 outline-none rounded-lg w-full"
                            value={editMember.email} />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 sm:mb-4">
                    <div>
                        <label htmlFor="role" className="leading-9 block font-normal">Assign Role</label>
                        <select name="role" id="role" className="bg-slate-100 border p-2 outline-none rounded-lg w-full">
                            <option value="admin">Admin</option>
                            <option value="editor">Editor</option>
                            <option value="viewer">Viewer</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="status" className="leading-9 block font-normal">Status</label>
                        <select name="status" id="status" className="bg-slate-100 border p-2 outline-none rounded-lg w-full">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                <label htmlFor="permissions" className="leading-9 block font-normal">Permissions</label>
                <div className="grid grid-cols-2 gap-4 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" id="create" name="create" className="w-4 h-4" />
                        <label htmlFor="create">Create Posts</label>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="checkbox" id="manage" name="manage" className="w-4 h-4" />
                        <label htmlFor="manage">Manage Posts</label>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="checkbox" id="edit" name="edit" className="w-4 h-4" />
                        <label htmlFor="edit">Edit Posts</label>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="checkbox" id="view" name="view" className="w-4 h-4" />
                        <label htmlFor="view">View Posts</label>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="checkbox" id="remove" name="remove" className="w-4 h-4" />
                        <label htmlFor="remove">Remove Posts</label>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-6">
                    <button type="submit" className="py-2 cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 border border-indigo-500 rounded-lg my-1 transition-all">Save</button>
                    <button type="reset" className="py-2 cursor-pointer bg-white text-indigo-500 hover:bg-indigo-100 border border-indigo-500 rounded-lg my-1 transition-all" onClick={() => setDrawerOpen(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm