import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ProfileContext} from "../../context/profileContext";

export const ProfilePreviousButton = (props) => {
    const {isActive, partParam} = props;
    const navigate = useNavigate();
    const {previousProfileComponentPath} = useContext(ProfileContext);

    // console.log("prevBtn isActive", isActive);

    return (
    <button
        className={`hover:border-b hover:border-b-blue text-blue font-bold py-2 mx-4 rounded ${isActive ? "" : "opacity-50 cursor-not-allowed"}`}
        onClick={()=>{
            if(isActive) {
                navigate(previousProfileComponentPath(partParam));
            }
        }}>
        Previous
    </button>
    )
}

export default ProfilePreviousButton;