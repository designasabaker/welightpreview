import {useEffect} from "react";
import {useProfileContext} from "../../context/profileContext";

export default function Awards() {
    const {handleProfileComponentIdOnChange,updateComponentIdByParams} = useProfileContext();
    updateComponentIdByParams();

    return (
        <p>Awards</p>
    )
}