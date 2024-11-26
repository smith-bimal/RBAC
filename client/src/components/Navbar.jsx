import { useState } from "react"
import { useNavigate } from "react-router";
import apiRequest from "../lib/apiRequest";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const handleSignOut = () => {
        apiRequest.post("signout")
            .then(() => {
                setShowDropdown(false);
                localStorage.removeItem();
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                navigate("/");
            })
        console.log("Handle Sign Out");
    }

    return (
        <div className="px-8 sm:px-12 py-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-6 xl:gap-20 justify-between">
                <h1 className="text-indigo-500 font-bold text-2xl"><i className="ri-eye-2-fill mr-2"></i>RBAC</h1>
                <div className="hidden lg:flex items-center gap-8 whitespace-nowrap">
                    <p className="font-semibold cursor-pointer">Projects <i className="ri-arrow-down-s-fill text-indigo-500"></i></p>
                    <p className="font-semibold cursor-pointer">Groups <i className="ri-arrow-down-s-fill text-indigo-500"></i></p>
                    <p className="font-semibold cursor-pointer">Products <i className="ri-arrow-down-s-fill text-indigo-500"></i></p>
                    <p className="font-semibold cursor-pointer">More <i className="ri-arrow-down-s-fill text-indigo-500"></i></p>
                </div>
            </div>

            <div className="flex items-center gap-8 relative">
                <div className="relative grow hidden md:block">
                    <input type="text" className="bg-slate-200 pl-10 pr-4 py-2 outline-none rounded-lg font-semibold text-slate-500 w-fit xl:w-96" placeholder="Search" />
                    <i className="ri-search-line absolute text-xl left-3 top-1/2 -translate-y-1/2 text-slate-500"></i>
                </div>
                <div className="flex items-center gap-6 text-indigo-500 text-xl">
                    <i className="ri-question-fill cursor-pointer hidden md:block"></i>
                    <i className="ri-notification-3-fill cursor-pointer"></i>
                    <div className="flex items-center cursor-pointer" onClick={() => setShowDropdown(prev => !prev)}>
                        <img src="https://www.pngkey.com/png/detail/138-1388270_transparent-user-png-icon.png" alt="" className="h-12 w-12 object-cover rounded-full" />
                        <i className="ri-arrow-down-s-fill text-indigo-500"></i>
                    </div>
                    {showDropdown &&
                        <div className="absolute px-4 py-2 whitespace-nowrap text-base text-red-500 font-semibold top-14 right-0 rounded-lg border bg-white cursor-pointer" onClick={handleSignOut}>
                            <p><i className="ri-logout-circle-r-line mr-2"></i>Sign Out</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar