import { useState } from "react";
import FilterSearch from "./FilterSearch";
import MembersTable from "./MembersTable";
import Pagination from "./Pagination";
import Card from "./UI/Card";
import EditDrawer from "./EditDrawer";
import EditForm from "./EditForm";
import AddMember from "./AddMember";

const members = [
    { userId: "Z67890", name: "Yara Bell", email: "Yara.Bell@example.com", role: "viewer", status: "inactive", permissions: { create: false, manage: false, edit: false, view: true, remove: false }, createdOn: "29-10-2024" },
    { userId: "Q78901", name: "Penny Scott", email: "Penny.Scott@example.com", role: "editor", status: "active", permissions: { create: true, manage: false, edit: true, view: true, remove: false }, createdOn: "07-11-2024" },
    { userId: "N45678", name: "Mason Hall", email: "Mason.Hall@example.com", role: "admin", status: "active", permissions: { create: true, manage: true, edit: true, view: true, remove: true }, createdOn: "10-11-2024" },
    { userId: "F67890", name: "David Wilson", email: "David.Wilson@example.com", role: "viewer", status: "inactive", permissions: { create: false, manage: false, edit: false, view: true, remove: false }, createdOn: "18-11-2024" },
    { userId: "D45678", name: "Bob Brown", email: "Bob.Brown@example.com", role: "admin", status: "inactive", permissions: { create: true, manage: true, edit: true, view: true, remove: true }, createdOn: "20-11-2024" },
    { userId: "K12345", name: "Ivy Adams", email: "Ivy.Adams@example.com", role: "viewer", status: "active", permissions: { create: false, manage: false, edit: false, view: true, remove: false }, createdOn: "13-11-2024" },
    { userId: "R89012", name: "Quinn Baker", email: "Quinn.Baker@example.com", role: "viewer", status: "active", permissions: { create: false, manage: false, edit: false, view: true, remove: false }, createdOn: "06-11-2024" },
    { userId: "T01234", name: "Samuel Murphy", email: "Samuel.Murphy@example.com", role: "editor", status: "active", permissions: { create: false, manage: false, edit: false, view: true, remove: false }, createdOn: "04-11-2024" },
    { userId: "I90123", name: "Grace Lee", email: "Grace.Lee@example.com", role: "viewer", status: "active", permissions: { create: false, manage: false, edit: false, view: true, remove: false }, createdOn: "15-11-2024" },
    { userId: "V23456", name: "Ursula Rogers", email: "Ursula.Rogers@example.com", role: "admin", status: "inactive", permissions: { create: true, manage: true, edit: true, view: true, remove: true }, createdOn: "02-11-2024" },
    { userId: "B89012", name: "Adeline Miller", email: "Adeline.Miller@example.com", role: "viewer", status: "active", permissions: { create: false, manage: false, edit: false, view: true, remove: false }, createdOn: "27-10-2024" },
    { userId: "W34567", name: "Vince Howard", email: "Vince.Howard@example.com", role: "viewer", status: "active", permissions: { create: false, manage: false, edit: false, view: true, remove: false }, createdOn: "01-11-2024" },
    { userId: "L23456", name: "Jack Lewis", email: "Jack.Lewis@example.com", role: "admin", status: "active", permissions: { create: true, manage: true, edit: true, view: true, remove: true }, createdOn: "12-11-2024" },
    { userId: "P67890", name: "Oliver Young", email: "Oliver.Young@example.com", role: "editor", status: "inactive", permissions: { create: false, manage: false, edit: true, view: true, remove: false }, createdOn: "08-11-2024" },
    { userId: "Y56789", name: "Xander King", email: "Xander.King@example.com", role: "editor", status: "active", permissions: { create: true, manage: false, edit: false, view: false, remove: false }, createdOn: "30-10-2024" },
    { userId: "G78901", name: "Emma Moore", email: "Emma.Moore@example.com", role: "editor", status: "active", permissions: { create: false, manage: false, edit: true, view: true, remove: false }, createdOn: "17-11-2024" },
    { userId: "C90123", name: "Benjamin Wright", email: "Benjamin.Wright@example.com", role: "viewer", status: "active", permissions: { create: false, manage: false, edit: false, view: true, remove: false }, createdOn: "26-10-2024" },
    { userId: "S90123", name: "Rachel Perez", email: "Rachel.Perez@example.com", role: "admin", status: "inactive", permissions: { create: true, manage: true, edit: true, view: true, remove: true }, createdOn: "05-11-2024" },
    { userId: "M34567", name: "Lily Walker", email: "Lily.Walker@example.com", role: "editor", status: "inactive", permissions: { create: true, manage: false, edit: false, view: false, remove: false }, createdOn: "11-11-2024" },
    { userId: "E56789", name: "Charlie Davis", email: "Charlie.Davis@example.com", role: "editor", status: "inactive", permissions: { create: true, manage: false, edit: true, view: true, remove: false }, createdOn: "19-11-2024" },
    { userId: "A12345", name: "John Doe", email: "John.Doe@example.com", role: "admin", status: "active", permissions: { create: true, manage: true, edit: true, view: true, remove: true }, createdOn: "23-11-2024" },
    { userId: "H89012", name: "Frank Harris", email: "Frank.Harris@example.com", role: "admin", status: "inactive", permissions: { create: true, manage: true, edit: true, view: true, remove: true }, createdOn: "16-11-2024" },
    { userId: "X45678", name: "Wendy Green", email: "Wendy.Green@example.com", role: "admin", status: "inactive", permissions: { create: true, manage: true, edit: true, view: true, remove: true }, createdOn: "31-10-2024" },
];



const Members = () => {
    const [filteredMembers, setFilteredMembers] = useState(members);
    const [editMember, setEditMember] = useState({});
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [addMemberModalOpen, setAddMemberModalOpen] = useState(false);

    const lastMemberIndex = itemsPerPage * pageNumber;
    const firstMemberIndex = lastMemberIndex - itemsPerPage;
    const currentMembers = filteredMembers.slice(firstMemberIndex, lastMemberIndex);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleEditClick = () => {
        toggleDrawer(true)();
    };

    return (
        <div className="p-8 font-medium w-full h-full overflow-auto">
            <div className="flex items-center justify-between mb-4 flex-wrap whitespace-nowrap gap-4">
                <h1 className="text-2xl font-semibold">Members ({members.length})</h1>
                <div className="px-6 py-2 bg-indigo-500 border border-indigo-500 rounded-lg text-white cursor-pointer" onClick={()=>setAddMemberModalOpen(true)}>Add member</div>
            </div>

            <Card>
                <FilterSearch
                    members={members}
                    setFilteredMembers={setFilteredMembers}
                    filteredMembers={filteredMembers}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                />
                <MembersTable
                    members={currentMembers}
                    itemsPerPage={itemsPerPage}
                    handleEditClick={handleEditClick}
                    setEditMember={setEditMember}
                />
                <Pagination
                    itemsPerPage={itemsPerPage}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    length={filteredMembers.length}
                />
            </Card>

            <EditDrawer open={drawerOpen} toggleDrawer={toggleDrawer}>
                <EditForm editMember={editMember} setDrawerOpen={setDrawerOpen} />
            </EditDrawer>

            {
                addMemberModalOpen &&
                <AddMember open={addMemberModalOpen} toggleModal={setAddMemberModalOpen} />
            }
        </div>
    );
};

export default Members;