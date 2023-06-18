import React from 'react';
import {useProfileContext} from "../../context/profileContext";

export default function BasicInfo() {
    const inputStyle = "border-b border-gray-300 w-24 px-2"
    const {handleProfileChange} = useProfileContext();

    return (
        <>
            <h1 className={"text-2xl py-4"}>Basic Info</h1>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" className={inputStyle} onChange={handleProfileChange}/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" className={inputStyle} onChange={handleProfileChange}/>
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <label htmlFor="birthDate">Birth Date</label>
                <input type="date" name="birthDate" id="birthDate" className={inputStyle} onChange={handleProfileChange}/>
            </div>
            <h2>Current Education</h2>
            <div>
                <label htmlFor="currentSchool">Current School</label>
                <input type="text" name="currentSchool" id="currentSchool" className={inputStyle} onChange={handleProfileChange}/>
                <lable htmlFor="Location"></lable>
                <input type="text" name="location" id="location" className={inputStyle} onChange={handleProfileChange}/>
            </div>
        </>
    )
}


