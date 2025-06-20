
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, User, Search } from 'lucide-react';
import { useDispatch, useSelector} from "react-redux";
import { toggleSideBar,setSearch } from "../appSlice";
import appStore from "../appStore";

function Header() {
    const [searchState,setSearchState] = useState('')
    
    const searchVideo = useSelector((appStore)=>appStore.SearchReducer.search)
    const dispatch = useDispatch()
    
    const handleSearch = (e)=>
        {
            setSearchState(e.target.value)
            dispatch(setSearch(e.target.value))
        }

    const show = () =>
        {       console.log("Toggle the sideBar.....")
                dispatch(toggleSideBar());
        }
    
    return (
        <div className="flex justify-between items-center p-4 shadow-lg">
            <div className="flex items-center gap-2">
                <Menu onClick={show} style={{cursor:"pointer"}}/>
                <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
            </div>
            <div className="flex relative items-center gap-1 w-[500px]">
                <input type="text" placeholder="Search" value={searchState} onChange={handleSearch} className=" border-2 border-gray-300 rounded-full px-10 py-2 w-full" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><Search /></span>
            </div>
            <User />
        </div>)
}

export default Header;
