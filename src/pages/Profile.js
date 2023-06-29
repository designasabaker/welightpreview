import React, {useContext, useEffect} from 'react';
import {labelStyle, subTitleStyle, titleStyle, divStyle, inputStyle} from "../components/ProfileComponents/style";
import {useNavigate} from "react-router-dom";

function Profile(){
    const navigate = useNavigate();

    return(
        <div className={"flex flex-col pr-3"}>
            <h1 className={titleStyle}>Welcome!</h1>
            <p className={"font-sans font-thin"}>We're excited to announce a new feature that is set to significantly enhance your experience on our platform. We have introduced a User Profile section, a personal space where you can provide and manage your information to tailor your experiences and interactions on our platform.<br/><br/>

                Please note that we are committed to maintaining the privacy and security of your information. All data provided will be stored securely and used strictly in accordance with our Privacy Policy.<br/><br/>

                We thank you for your prompt attention to this matter and for helping us to create a more personalized and efficient experience for all users. Should you have any queries or need assistance while filling out your information, please don't hesitate to get in touch with our customer support team.<br/><br/>

                Thank you for being a valued member of our community!</p>
            <button
                className={`h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold my-6 py-2 px-4 rounded`}
                onClick={()=>{
                    navigate("/profile/basic-info");
                }}>
                Let's GO!
            </button>
        </div>
    )
}

export default Profile;