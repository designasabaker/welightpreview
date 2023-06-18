import React from "react";
import {useProfileContext} from "../../context/profileContext";
import {NavLink} from "react-router-dom";

export default function ProfileNavbar() {
    const {navLinks} = useProfileContext();

    return (
        <>
            <div className="flex flex-col px-3 text-center">
                {navLinks.map((link, index) => (
                    <NavLink
                        className={`text-md text-slate-400 hover:text-slate-600 py-2 `}
                        activeClassName={"text-slate"}
                        to={link.path}
                        key={index}
                    >
                        {link.title}
                    </NavLink>))}
            </div>
        </>
    )
}
