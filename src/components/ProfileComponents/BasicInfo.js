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
    const [majorOptions, setMajorOptions] = React.useState([
        {value: 'Computer Science', label: 'Computer Science'},
        {value: 'Math', label: 'Math'},
        {value: 'Physics', label: 'Physics'},
    ]);
    const [showMajorInput, setShowMajorInput] = React.useState(false);

    updateComponentIdByParams();

    return (
        <>
            <h2>Basic Info</h2>
            <div className={"profileDiv"}>
                <label htmlFor="firstName">First Name<RequireStar /></label>
                <input required={true} type="text" name="firstName" id="firstName" onChange={handleProfileOnChange} value={userInfo.firstName} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" onChange={handleProfileOnChange} value={userInfo.lastName}/>
            </div>
            <div className={"profileDiv"}>
                <label htmlFor="gender" className={"w-24"}>Gender</label>
                <select name="gender" value={userInfo.gender}>
                    <option value="none"></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <label htmlFor="birthDate" className={"w-24"}>Birth Date</label>
                <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    value={userInfo.birthDate}
                    onChange={handleProfileOnChange}/>
            </div>
            <h2>Current Education</h2>
            <div className={"profileDiv"}>
                <label htmlFor="currentSchool" className={"w-36"}>School Name<RequireStar /></label>
                <input required={true} className={"w-36"} type="text" name="school" id="school" onChange={handleProfileOnChange} value={userInfo.school}/>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" onChange={handleProfileOnChange} value={userInfo.location} className={"w-36"}/>
            </div>
            <div className={"profileDiv"}>
                <label htmlFor="courseSystem" className={"w-36"}>Course System<RequireStar /></label>
                <input required={true} type="text" name="courseSystem" id="courseSystem" onChange={handleProfileOnChange} className={"w-36"}/>
                <label htmlFor="grade" className={"w-24"}>Grade</label>
                <input required={true} type="text" name="grade" id="grade" onChange={handleProfileOnChange} className={"w-16"}/>
            </div>
            <div className={"profileDiv items-start"}>
                <label htmlFor="Language" className={"w-36"}>Language</label>
                {/*<input type="text" name="language" id="language" onChange={handleProfileChange}/>*/}
                <div className={"flex flex-col"}>
                    <div>
                        <select className={"w-36 mr-1"} name="language" id="language" onChange={handleProfileOnChange}>
                            <option value={userInfo.language}>{userInfo.language}</option>
                            {languageOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>))}
                        </select>
                        {!!showLanguageInput &&
                            <>
                                <input type="text" name="language" id="language" onChange={handleProfileOnChange} className={"ml-0 mr-1"}/>
                                <button
                                    onClick={ e => {
                                        // handleProfileOnChange(e, 'language', userInfo.language);
                                        setShowLanguageInput(false);
                                    }}>+</button>
                            </>
                        }
                    </div>
                    <div className={"flex flex-row gap-1"}>
                        <button
                            className={"text-sm font-thin"}
                            onClick={()=>setShowLanguageInput(true)}>Add more language</button>
                    </div>
                </div>
            </div>
            <div className={"profileDiv items-start"}>
                <label htmlFor="major" className={"w-36"}>Intended Major</label>
                {/*<input type="text" name="language" id="language" onChange={handleProfileChange}/>*/}
                <div className={"flex flex-col"}>
                    <div>
                        <select className={"w-36 mr-1"} name="major" id="major" onChange={handleProfileOnChange}>
                            <option value={userInfo.major} >{userInfo.major}</option>
                            {majorOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>))}
                        </select>
                        {!!showMajorInput &&
                            <>
                                <input type="text" name="major" id="major" onChange={handleProfileOnChange} className={"ml-0 mr-1"}/>
                                <button
                                    onClick={ e => {
                                        // handleProfileOnChange(e, 'language', userInfo.language);
                                        setShowMajorInput(false);
                                    }}>+</button>
                            </>
                        }
                    </div>
                    <div className={"flex flex-row gap-1"}>
                        <button
                            className={"text-sm font-thin"}
                            onClick={()=>setShowMajorInput(true)}>Add more major</button>
                    </div>
                </div>
            </div>
        </>
    );
}


