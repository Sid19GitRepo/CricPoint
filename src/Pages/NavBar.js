import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {

    return(
        <div className="flex bg-blue-600 h-1/6 shadow-2xl place-content-between items-center font-sans overflow-auto scrollbar-hide">
            <ul className="flex text-3xl text-white pl-16">
               <NavLink to="/" ><li className="mx-4 shadow-sm p-4">Home</li></NavLink>
                <NavLink to="/schedule"><li className="mx-4 shadow-sm p-4">Schedule</li></NavLink>
                <NavLink to="/rankings"><li className="mx-4 shadow-sm p-4">Rankings</li></NavLink>
            </ul>
            <div className="text-5xl text-white mr-28 shadow-2xl bg-gray-700 p-4">
                <b>CricPoint</b>
            </div>

        </div>
        
    )

}

export default NavBar