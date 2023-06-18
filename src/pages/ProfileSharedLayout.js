import ProfileProvider from "../context/profileContext";
import ProfileNavbar from "../components/ProfileComponents/ProfileNavbar";
import React from "react";
import {Outlet} from "react-router-dom";


const ProfileSharedLayout = () => {
    return (<>
        <ProfileProvider>
            <div className={"grid grid-cols-[300px_1fr]"}>
                <ProfileNavbar/>
                <Outlet />
            </div>
        </ProfileProvider>
    </>)
}

export default ProfileSharedLayout;