import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ProfileContext} from "../../context/profileContext";

export default function ProfileNextButton(props) {
    const {isActive, partParam, canShowAlert, isRequiredFilled, setCanShowAlert, checkRequiredFilled} = props;
    const navigate = useNavigate();
    const {nextProfileComponentPath} = useContext(ProfileContext);

    // console.log("nextBtn isActive", isActive);

    return (
        <div className={"flex flex-row items-center"}>
            {(canShowAlert && !isRequiredFilled) && <div className={"text-red-500 text-sm mx-6"}>Please fill in the required fields</div>}
            <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isActive ? "" : "opacity-50 cursor-not-allowed"}`}
                onClick={()=>{
                    setCanShowAlert(true);
                    if(isActive && isRequiredFilled){
                        navigate(nextProfileComponentPath(partParam));
                    }
            }}>
                Next
            </button>
        </div>
    )
}