import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ProfileContext} from "../../context/profileContext";

export default function ProfileSubmitProfileSummaryButton(props) {
    const { userInfo, setShowSummary } = useContext(ProfileContext);
    const {isActive = true, partParam = '', canShowAlert, isRequiredFilled, setCanShowAlert, checkRequiredFilled, isLegalScore = true} = props;
    const navigate = useNavigate();

    return (
        <div className={"flex flex-row items-center"}>
            {(canShowAlert && !isRequiredFilled) && <div className={"text-red-500 text-sm mx-6"}>Please fill in the required fields</div>}
            {(canShowAlert && !isLegalScore) && <div className={"text-red-500 text-sm mx-6"}>Please enter a valid score</div>}
            <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isActive ? "" : "opacity-50 cursor-not-allowed"}`}
                onClick={()=>{
                    setCanShowAlert(true);
                    if (isRequiredFilled && isLegalScore) {
                        setShowSummary(true);
                        navigate(`/profile/info-summary`);
                    }
                }}>
                View Summary
            </button>
        </div>
    )
}