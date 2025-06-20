import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { House, Youtube, AudioWaveform, CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import { closeSideBar, toggleSideBar } from "../appSlice";

const SideBar = () => {

    const isSideBarshow = useSelector((appStore) => appStore.SideBarReducer.isSideBarOpen)

    const dispatch = useDispatch()

    const handletoggleSide = ()=>
        {
            dispatch(closeSideBar())
        }

    console.log("isSideBarShow->", isSideBarshow)

    return (
        <div className={`absolute transition-transform duration-300 ${isSideBarshow ? "translate-x-0" : "-translate-x-full"}`}>
            <aside className="bg-white border zborder-gray-200 rounded-xl shadow-md flex flex-col w-[180px] my-4 mx-2 py-6 h-[80vh]">
                <ul className="space-y-2">
                    <Link to="/" onClick={handletoggleSide}><li className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
                        <House className="text-red-500" />
                        <span className="ml-4 font-medium text-gray-800">Home</span>
                    </li></Link>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
                        <Youtube className="text-red-600" />
                        <span className="ml-4 font-medium text-gray-800">Subscription</span>
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
                        <AudioWaveform className="text-blue-500" />
                        <span className="ml-4 font-medium text-gray-800">Podcast</span>
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition">
                        <CircleUser className="text-green-500" />
                        <span className="ml-4 font-medium text-gray-800">Account</span>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default SideBar;