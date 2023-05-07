import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Route, Routes, useNavigate, useParams} from "react-router-dom";
import ProfileNavbar from "../components/ProfileComponents/ProfileNavbar";
import ProfileProvider, {ProfileContext} from "../context/profileContext";
import {BasicInfo, TestScore, Awards, Activities} from "../components/ProfileComponents";
import ProfileNextButton from "../components/ProfileComponents/ProfileNextButton";

function renderSwitch(param) {
    switch(param) {
        case "test-score":
            return <TestScore/>
        case "awards":
            return <Awards/>
        case "activities":
            return <Activities/>
        default:
            return <BasicInfo/>;
    }
}

function Profile(){
    const partParam = useParams().part;

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
            <ProfileProvider>
                <ProfileNavbar/>
                {renderSwitch(partParam)}
                <ProfileNextButton partParam={"/profile/" +  partParam} />
            </ProfileProvider>
        </>
    )
}

export default Profile;