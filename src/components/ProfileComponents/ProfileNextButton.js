import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ProfileContext} from "../../context/profileContext";

export default function ProfileNextButton({partParam}) {
    const navigate = useNavigate();
    const {nextProfileComponentPath} = useContext(ProfileContext);

    return (
        <button onClick={()=>{
            navigate(nextProfileComponentPath(partParam));
        }}>Next</button>
    )
}