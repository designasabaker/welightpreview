import ProfileProvider from "../context/profileContext";
import ProfileNavbar from "../components/ProfileComponents/ProfileNavbar";
import React from "react";
import {Outlet} from "react-router-dom";

const ProfileSharedLayout = () => {
    return (<>
        <ProfileProvider>
            <ProfileNavbar/>
            <Outlet />
        </ProfileProvider>
    </>)
}

export default ProfileSharedLayout;