/* eslint-disable react/prop-types */
import { useState } from "react";

const FilterSearch = ({ members, setMembers, itemsPerPage, setItemsPerPage }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const sortAtoZ = () => {
        const sortedMembers = [...members].sort((a, b) => a.name.localeCompare(b.name));
        setMembers(sortedMembers);
    };

    const sortZtoA = () => {
        const sortedMembers = [...members].sort((a, b) => b.name.localeCompare(a.name));
        setMembers(sortedMembers);
    };

    // Convert date to parsedDate
    const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('-');
        return new Date(`${year}-${month}-${day}`);
    };

    const sortNewtoOld = () => {
        const sortedMembers = [...members].sort((a, b) => parseDate(b.createdOn) - parseDate(a.createdOn));  // Newest first
        setMembers(sortedMembers);
    };
    
    const sortOldtoNew = () => {
        const sortedMembers = [...members].sort((a, b) => parseDate(a.createdOn) - parseDate(b.createdOn));  // Oldest first
        setMembers(sortedMembers);
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        if (value === '1') {
            sortAtoZ();
        } else if (value === '2') {
            sortZtoA();
        } else if (value === '3') {
            sortNewtoOld();
        } else if (value === '4') {
            sortOldtoNew();
        }
    };
    
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filteredMembers = members.filter(member =>
            member.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setMembers(filteredMembers);
    };

    return (
        <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <div className="flex items-center gap-4 flex-wrap">
                <div className="relative grow">
                    <input
                        type="text"
                        className="bg-slate-200 pl-9 pr-4 py-2 outline-none rounded-lg font-semibold text-slate-500"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <i className="ri-search-line absolute text-xl left-2 top-1/2 -translate-y-1/2 text-slate-500"></i>
                </div>
                
                <select
                    className="bg-slate-200 px-4 py-2 outline-none rounded-lg font-semibold text-slate-500"
                    defaultValue="3"
                    onChange={handleSortChange}
                >
                    <option value="1">A-Z</option>
                    <option value="2">Z-A</option>
                    <option value="3">Newest First</option>
                    <option value="4">Oldest First</option>
                </select>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
                <label htmlFor="items" className="text-sm">Items per page:</label>
                <select
                    id="items"
                    className="bg-slate-200 px-4 py-2 outline-none rounded-lg font-semibold text-slate-500"
                    defaultValue={itemsPerPage}
                    onChange={(e) => setItemsPerPage(e.target.value)}
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSearch;
