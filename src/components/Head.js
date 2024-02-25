import React from "react";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../utils/appSlice";

const Head = () => {

    const dispatch = useDispatch();

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
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
                <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">🔍</button>
            </div>

            <div>
                <img className="h-8" src="https://cdn-icons-png.flaticon.com/512/456/456283.png" alt="user-icon"/>
            </div>

        </div>

    )
}

export default Head;