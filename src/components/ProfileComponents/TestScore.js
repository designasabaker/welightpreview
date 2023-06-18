import {useEffect} from "react";
import {useProfileContext} from "../../context/profileContext";

export default function TestScore() {
    const {handleProfileComponentIdOnChange,updateComponentIdByParams} = useProfileContext();
    updateComponentIdByParams();

    return (
        <p>Test Score</p>
    )
}