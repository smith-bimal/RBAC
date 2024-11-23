import { useState } from "react";

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="relative h-full">
            {isVisible && (<div className="p-6 pt-10 font-medium flex flex-col justify-start gap-6 bg-white h-full w-60">
                <p className="px-4 py-2 rounded-lg hover:text-indigo-500 cursor-pointer transition-all"><i className="mr-2 text-xl ri-dashboard-horizontal-fill"></i> Dashboard</p>
                <p className="px-4 py-2 rounded-lg hover:text-indigo-500 cursor-pointer transition-all"><i className="mr-2 text-xl ri-group-2-fill"></i> Integration</p>
                <p className="px-4 py-2 rounded-lg hover:text-indigo-500 cursor-pointer transition-all"><i className="mr-2 text-xl ri-money-dollar-circle-fill"></i> Billing</p>
                <p className="px-4 py-2 rounded-lg cursor-pointer transition-all bg-indigo-500 text-white"><i className="mr-2 text-xl ri-group-fill"></i> Members</p>
                <p className="px-4 py-2 rounded-lg hover:text-indigo-500 cursor-pointer transition-all"><i className="mr-2 text-xl ri-settings-fill"></i> Settings</p>
            </div>)}

            <div className="absolute h-full -right-4 top-0 flex items-center">
                <i className="ri-more-2-fill cursor-pointer py-2 border border-l-0 rounded-r-lg bg-white hover:text-indigo-500 transition-all text-xl" onClick={() => setIsVisible(prev => !prev)}></i>
            </div>
        </div>
    )
}

export default Sidebar