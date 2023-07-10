import React, {createContext, useContext, useState} from "react";
import {useParams} from "react-router-dom";


const initialUserInfo = {
    "user_id": "3",
    "firstName": "",
    "lastName": "",
    "name": "",
    "gender":"",
    "birthDate": "",
    "age": 1,
    "activities": {
        "a": "anything in json format"
    },
    "courseSystem":'',
    "nation": "China",
    "school": "",
    "location": "",
    "gpa": '',
    "gpa_cap": 4.1,
    "major": "",
    "exam": {
        "a": "anything in json format"
    },
    "language": "",
}
export const navLinks = [
    { id:1, title: 'Basic Info', path: '/profile/basic-info' }, // abs path
    { id:2, title: 'Test Score', path: '/profile/test-score' },
    { id:3, title: 'Awards', path: '/profile/awards' },
    { id:4, title: 'Activities', path: '/profile/activities' },
    { id:5, title: 'Summary', path: '/profile/info-summary' }
];

const nextProfileComponentPath = (currentProfileComponentPath) => {
    const index = navLinks.findIndex((link) => link.path === currentProfileComponentPath);
    if(index === -1){
        console.log("navlink index not found");
        return "";
    }else{
        console.log("navlink successfully found",index);
        return navLinks[(index+1) % navLinks.length].path;
    }
}

const previousProfileComponentPath = (currentProfileComponentPath) => {
    const index = navLinks.findIndex((link) => link.path === currentProfileComponentPath);
    if(index === -1){
        console.log("navlink index not found");
        return "";
    }else{
        console.log("navlink successfully found",index);
        return navLinks[(index-1) % navLinks.length].path;
    }
}

export const ProfileContext = createContext({});

function ProfileProvider({children}) {
    const [currentProfileComponentId, setCurrentProfileComponentId] = useState(-1);
    const [userInfo, setUserInfo] = useState(initialUserInfo);
    const [isRequiredFilled, setIsRequiredFilled] = useState(true);
    const [showSummary, setShowSummary] = useState(false); // show summary page after submitting

    const handleProfileOnChange = (e,name=e.target.name,value=e.target.value) => {
        e.preventDefault();
        // name = e.target.name;
        // value = e.target.value;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value
        }));
        console.log(userInfo);
    }

    const handleProfileComponentIdOnChange = (pathName) => {
        const id = navLinks.filter((link) => link.path === `/profile/${pathName}`)[0].id;
        console.log(id);
        setCurrentProfileComponentId(id);
    }

    const updateComponentIdByParams = () => {
        const {singlePartId} = useParams();
        if(singlePartId){
            const id = navLinks.filter((link) => link.path === `/profile/${singlePartId}`)[0].id;
            console.log(id);
            setCurrentProfileComponentId(id);
        }
    }

    return (
        <ProfileContext.Provider
            value={{userInfo,
                setUserInfo,
                navLinks,
                nextProfileComponentPath,
                previousProfileComponentPath,
                handleProfileOnChange,
                currentProfileComponentId,
                handleProfileComponentIdOnChange,
                isRequiredFilled,
                setIsRequiredFilled,
                updateComponentIdByParams,
                showSummary,
                setShowSummary,}}>
            {children}
        </ProfileContext.Provider>
    );
}


export const useProfileContext = () => useContext(ProfileContext);
export default ProfileProvider;