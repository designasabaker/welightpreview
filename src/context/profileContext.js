import React, {createContext, useContext, useState} from "react";


const initialUserInfo = {
    "user_id": "3",
    "name": "maxwell",
    "age": 1,
    "activities": {
        "a": "anything in json format"
    },
    "nation": "China",
    "school": "Wild Chicken",
    "gpa": 3.9999,
    "gpa_cap": 4.1,
    "major": "CS",
    "exam": {
        "a": "anything in json format"
    }
}
export const navLinks = [
    { id:1, title: 'Basic Info', path: '/profile/basic-info' }, // abs path
    { id:2, title: 'Test Score', path: '/profile/test-score' },
    { id:3, title: 'Awards', path: '/profile/awards' },
    { id:4, title: 'Activities', path: '/profile/activities' }];

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
    // const [currentProfileComponentId, setCurrentProfileComponentId] = useState(0);
    const [userInfo, setUserInfo] = useState(initialUserInfo);

    const handleProfileOnChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({...userInfo, [name]: value});
    }

    return (
        <ProfileContext.Provider value={{userInfo, setUserInfo, navLinks,nextProfileComponentPath,previousProfileComponentPath,handleProfileOnChange}}>
            {children}
        </ProfileContext.Provider>
    );
}


export const useProfileContext = () => useContext(ProfileContext);
export default ProfileProvider;