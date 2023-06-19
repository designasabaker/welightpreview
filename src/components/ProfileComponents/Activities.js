import {useEffect} from "react";
import {useProfileContext} from "../../context/profileContext";

export default function Activities() {
    const {handleProfileComponentIdOnChange,updateComponentIdByParams} = useProfileContext();
    updateComponentIdByParams();

    return (
        <p>Activities</p>
    )
}