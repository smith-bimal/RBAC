/* eslint-disable react/prop-types */
const Pagination = ({ length, itemsPerPage, pageNumber, setPageNumber }) => {
    let pages=[];

    for (let i = 1; i <= Math.ceil(length/itemsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className="flex items-center justify-center gap-4 mt-6">
            {pages.map((page, idx)=>{
                return <button className={`px-4 py-2 rounded-md cursor-pointer ${pageNumber===page?"bg-indigo-500 text-white":"bg-indigo-100 text-indigo-500"}`} key={idx} onClick={()=>setPageNumber(page)}> {page} </button>;
            })}
        </div>
    )
}

export default Pagination