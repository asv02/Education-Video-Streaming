import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { SEARCH_API } from "../constants";
import { Menu, User, Search } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar, setSearch, additem } from "../appSlice";
import DropDown from "./DropDown";

function Header() {
    const [searchState, setSearchState] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        setSearchState(e.target.value)
        dispatch(setSearch(e.target.value))
    }

    const handleSearchApi = async () => {
        const data = await fetch(SEARCH_API + searchState);
        const json = await data.json();
        console.log("search for->", json[1]);
        setSearchResult(json[1])
        dispatch(additem({ [searchState]: searchResult }))
    }

    const SuggestionData = useSelector((appStore) => appStore.SuggestionReducer)

    useEffect(() => {
        console.log("suggestion->",SuggestionData)
        const timer = setTimeout(() => {
            if (SuggestionData[searchState]) {
                setSearchResult(SuggestionData[searchState]);
            }
            else {
                console.log("Api call......")
                handleSearchApi();
            }
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [searchState])


    const show = () => {
        console.log("Toggle the sideBar.....")
        dispatch(toggleSideBar());
    }

    return (
        <div className="flex justify-between items-center p-4 shadow-lg">
            <div className="flex items-center gap-2">
                <Menu onClick={show} style={{ cursor: "pointer" }} />
                <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
            </div>
            <div className="flex relative items-center gap-1 w-[500px]">
                <input type="text" onFocus={() => { setShowSuggestion(true) }} placeholder="Search" value={searchState} onBlur={() => { setShowSuggestion(false) }} onChange={handleSearch} className=" border-2 border-gray-300 rounded-full px-10 py-2 w-full" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><Search /></span>
                {showSuggestion && (
                    <div className="absolute top-full left-0 w-full">
                        <DropDown list={searchResult} />
                    </div>
                )}
            </div>
            <User />
        </div>)
}

export default Header;
