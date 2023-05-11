import ProfileProvider from "../context/profileContext";
import ProfileNavbar from "../components/ProfileComponents/ProfileNavbar";
import ProfileNextButton from "../components/ProfileComponents/ProfileNextButton";
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