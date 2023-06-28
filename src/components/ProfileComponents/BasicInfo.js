import React, {useEffect} from 'react';
import {useProfileContext} from "../../context/profileContext";

import {titleStyle, subTitleStyle, divStyle, labelStyle, inputStyle} from "./style";
import RequireStar from "../RequireStar";

export default function BasicInfo() {
    const {userInfo, handleProfileOnChange, updateComponentIdByParams} = useProfileContext();
    const [languageOptions, setLanguageOptions] = React.useState([
        {value: 'English', label: 'English'},
        {value: 'Chinese', label: 'Chinese'},
        {value: 'Spanish', label: 'Spanish'},
    ]);
    const [showLanguageInput, setShowLanguageInput] = React.useState(false);

    updateComponentIdByParams();

    return (
        <>
            <h2>Basic Info</h2>
            <div className={divStyle}>
                <label htmlFor="firstName">First Name<RequireStar /></label>
                <input required={true} type="text" name="firstName" id="firstName" onChange={handleProfileOnChange} value={userInfo.firstName} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" onChange={handleProfileOnChange} value={userInfo.lastName}/>
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender">
                    <option value="none"></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <label htmlFor="birthDate">Birth Date</label>
                <input
                    className={"w-36"}
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    onChange={handleProfileOnChange}/>
            </div>
            <h2>Current Education</h2>
            <div>
                <label htmlFor="currentSchool">School Name<RequireStar /></label>
                <input required={true} type="text" name="currentSchool" id="currentSchool" onChange={handleProfileOnChange}/>
                <lable htmlFor="Location">Location</lable>
                <input type="text" name="location" id="location" onChange={handleProfileOnChange}/>
            </div>
            <div>
                <label htmlFor="courseSystem">Course System<RequireStar /></label>
                <input required={true} type="text" name="courseSystem" id="courseSystem" onChange={handleProfileOnChange}/>
                <label htmlFor="grade">Grade</label>
                <input required={true} type="text" name="grade" id="grade" onChange={handleProfileOnChange}/>
            </div>
            <div>
                <label htmlFor="Language">Language</label>
                {/*<input type="text" name="language" id="language" onChange={handleProfileChange}/>*/}
                <select name="language" id="language" onChange={handleProfileOnChange} value={userInfo.language}>
                    {languageOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>))}
                </select>
                <button onClick={()=>setShowLanguageInput(true)}>Add more language</button>
                {!!showLanguageInput && <input type="text" name="language" id="language" onChange={handleProfileOnChange}/>}
            </div>
        </>
    )
}


