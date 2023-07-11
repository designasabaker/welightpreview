import {ProfileContext} from "../../context/profileContext";
import React, {useContext} from "react";
import {AiOutlineSave} from "react-icons/ai";

export default function SaveAsDraftBtn() {
    const {setLocalStorage} = useContext(ProfileContext);

    return (
        <button
            className={`my-0 mx-6 p-0 border-b border-b-sky-50 hover:border-b hover:border-b-blue text-slate-300 font-thin rounded `}
            onClick={()=>{
                setLocalStorage();
            }}>
            <AiOutlineSave className={"inline-block"}/> Save as draft
        </button>
    )
}