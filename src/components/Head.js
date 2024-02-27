import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import {YOUTUBE_SEARCH_API} from "../utils/constants";
import {cacheResults} from "../utils/searchSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
            clearTimeout(timer);
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        //update cache
        dispatch(cacheResults(searchQuery))
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img
                    onClick={toggleMenuHandler}
                    className="h-8 cursor-pointer" alt="menu"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"/>

                <a href="/">
                    <img className="h-8 mx-2" alt="logo"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
                </a>
            </div>

            <div className="col-span-2">
                <div>
                    <input
                        className="px-5 py-2 border border-gray-400 p-2 rounded-l-full w-[37rem]" type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(true)}
                    />
                    <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">🔍</button>
                </div>

                {showSuggestions && (
                    <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-grey-100">
                        <ul>
                            {suggestions.map(s => <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍
                                {s}</li>)}
                        </ul>
                    </div>
                )}
            </div>

            <div>
                <img className="h-8" src="https://cdn-icons-png.flaticon.com/512/456/456283.png" alt="user-icon"/>
            </div>
        </div>
    )
}

export default Head;