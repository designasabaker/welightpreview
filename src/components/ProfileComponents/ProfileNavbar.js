import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {ProfileContext} from "../../context/profileContext";

export default function ProfileNavbar() {
    const {navLinks} = useContext(ProfileContext);
    return (
        <div className="">
            <div className="">
                {navLinks.map((link, index) => (
                    <Link to={link.path} key={index}>{link.title}</Link>))}
            </div>
        </div>
    )
}
