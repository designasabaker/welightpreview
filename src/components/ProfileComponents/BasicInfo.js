import React, {useEffect} from 'react';
import {useProfileContext} from "../../context/profileContext";

import {titleStyle, subTitleStyle, divStyle, labelStyle, inputStyle} from "./style";

export default function BasicInfo() {
    const {handleProfileChange, updateComponentIdByParams} = useProfileContext();

    updateComponentIdByParams();

    return (
        <>
            <h1 className={titleStyle}>Basic Info</h1>
            <div className={divStyle}>
                <label htmlFor="firstName" className={labelStyle}>First Name</label>
                <input type="text" name="firstName" id="firstName" className={inputStyle} onChange={handleProfileChange}/>
                <label htmlFor="lastName" className={labelStyle}>Last Name</label>
                <input type="text" name="lastName" id="lastName" className={inputStyle} onChange={handleProfileChange}/>
            </div>
            <div>
                <label htmlFor="gender" className={labelStyle}>Gender</label>
                <select name="gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <label htmlFor="birthDate" className={labelStyle}>Birth Date</label>
                <input type="date" name="birthDate" id="birthDate" className={inputStyle} onChange={handleProfileChange}/>
            </div>
            <h2 className={subTitleStyle}>Current Education</h2>
            <div>
                <label htmlFor="currentSchool" className={labelStyle}>Current School</label>
                <input type="text" name="currentSchool" id="currentSchool" className={inputStyle} onChange={handleProfileChange}/>
                <lable htmlFor="Location" className={labelStyle}>Location</lable>
                <input type="text" name="location" id="location" className={inputStyle} onChange={handleProfileChange}/>
            </div>
        </>
    )
}


