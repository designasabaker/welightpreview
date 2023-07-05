import ProfileProvider from "../context/profileContext";
import ProfileNavbar from "../components/ProfileComponents/ProfileNavbar";
import React from "react";
import {Outlet} from "react-router-dom";

export const ProfileSharedLayout = () => {
    return(
        <>
            <ProfileProvider>
                <div className={"pt-[90px]  h-screen"}>
                    <div className={"grid grid-cols-[200px_1fr] h-full"}>
                        <ProfileNavbar/>
                        <div className={"flex flex-col h-full"}>
                            <div className={"flex-grow bg-gray-100 px-6 py-6 m-0"}>
                                <div className={"bg-white px-3 overflow-auto"}>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileProvider>
        </>
)}

export default ProfileSharedLayout;