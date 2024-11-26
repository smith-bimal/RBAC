import { useEffect, useState } from "react";
import FilterSearch from "./FilterSearch";
import MembersTable from "./MembersTable";
import Pagination from "./Pagination";
import Card from "./UI/Card";
import EditDrawer from "./EditDrawer";
import EditForm from "./EditForm";
import AddMember from "./AddMember";
import apiRequest from "../lib/apiRequest";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [editMember, setEditMember] = useState({});
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [addMemberDrawerOpen, setAddMemberDrawerOpen] = useState(false);

    const lastMemberIndex = itemsPerPage * pageNumber;
    const firstMemberIndex = lastMemberIndex - itemsPerPage;
    const currentMembers = filteredMembers.slice(firstMemberIndex, lastMemberIndex);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleEditClick = () => {
        toggleDrawer(true)();
    };

    const addMember = (newMember) => {
        setMembers((prevMembers) => [...prevMembers, newMember]);
        setFilteredMembers((prevFilteredMembers) => [...prevFilteredMembers, newMember]);
    };

    useEffect(() => {
        apiRequest.get("members")
            .then(res => {
                const fetchedMembers = res.data;
                setMembers(fetchedMembers);
                setFilteredMembers(fetchedMembers);
            }).catch(err => console.log(err));
    }, [editMember, addMemberDrawerOpen, modalOpen]);

    return (
        <div className="p-8 font-medium w-full h-full overflow-auto">
            <div className="flex items-center justify-between mb-4 flex-wrap whitespace-nowrap gap-4">
                <h1 className="text-2xl font-semibold">Members ({members.length})</h1>
                <div
                    className="px-6 py-2 bg-indigo-500 border border-indigo-500 rounded-lg text-white cursor-pointer"
                    onClick={() => setAddMemberDrawerOpen(true)}
                >
                    Add member
                </div>
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
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
                <Pagination
                    itemsPerPage={itemsPerPage}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    length={filteredMembers.length}
                />
            </Card>

            <EditDrawer open={drawerOpen} toggleDrawer={toggleDrawer}>
                <EditForm editMember={editMember} setEditMember={setEditMember} setDrawerOpen={setDrawerOpen} />
            </EditDrawer>

            <EditDrawer open={addMemberDrawerOpen} toggleDrawer={toggleDrawer}>
                <AddMember
                    toggleModal={setAddMemberDrawerOpen}
                    addMember={addMember}
                />
            </EditDrawer>
        </div>
    );
};

export default Members;

