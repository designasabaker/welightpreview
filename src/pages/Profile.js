import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Route, Routes, useNavigate, useParams} from "react-router-dom";
import ProfileNavbar from "../components/ProfileComponents/ProfileNavbar";
import ProfileProvider, {ProfileContext} from "../context/profileContext";
import {BasicInfo, TestScore, Awards, Activities} from "../components/ProfileComponents";
import ProfileNextButton from "../components/ProfileComponents/ProfileNextButton";

function Profile(){

    return(
        // <>
        //     <ProfileProvider>
        //         <>
        //             <ProfileNavbar/>
        //             <BrowserRouter basename="/profile">
        //                 <Routes>
        //                     <Route path="/basic-info" element={<BasicInfo/>}/>
        //                     <Route path="/test-score" element={<TestScore/>}/>
        //                     <Route path="/awards" element={<Awards/>}/>
        //                     <Route path="/activities" element={<Activities/>}/>
        //                 </Routes>
        //             </BrowserRouter>
        //             <button onClick={()=>{
        //                 console.log("next");
        //             }}>Next</button></>
        //     </ProfileProvider>
        // </>
        <>
            <div >

            </div>
        </>
    )
}

export default Profile;