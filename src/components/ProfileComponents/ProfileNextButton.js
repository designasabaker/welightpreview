import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ProfileContext} from "../../context/profileContext";

export default function ProfileNextButton(props) {
    const {isActive, partParam} = props;
    const navigate = useNavigate();
    const {nextProfileComponentPath} = useContext(ProfileContext);

    // console.log("nextBtn isActive", isActive);

    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isActive ? "" : "opacity-50 cursor-not-allowed"}`}
            onClick={()=>{
            if(isActive) {
                navigate(nextProfileComponentPath(partParam));
            }
        }}>
            Next
        </button>
    )
}