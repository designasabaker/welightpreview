import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";
import {useProfileContext} from "../../context/profileContext";
import RequireStar from "../RequireStar";
import ProfilePreviousButton from "./ProfilePreviousButton";
import ProfileNextButton from "./ProfileNextButton";
import ProfileSubmitButton from "./ProfileSubmitButton";

const slate = '#C0C2C9';
const initialActivity = { activityType: "", activityName: "", details: "", level: "" };
const initialState = {
    activities: [initialActivity],
    isRequiredFilled: false,
    canShowAlert: false,
};

const ACTIONS = {
    SET_ACTIVITY: 'SET_ACTIVITY',
    ADD_ACTIVITY: 'ADD_ACTIVITY',
    REMOVE_ACTIVITY: 'REMOVE_ACTIVITY',
    SET_IS_REQUIRED_FILLED: 'SET_IS_REQUIRED_FILLED',
    SET_CAN_SHOW_ALERT: 'SET_CAN_SHOW_ALERT',
}

function activitiesReducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_ACTIVITY:
            return {
                ...state,
                activities: state.activities.map((activity, index) =>
                    index === action.index ? { ...activity, [action.name]: action.value } : activity
                ),
            };
        case ACTIONS.ADD_ACTIVITY:
            return { ...state, activities: [...state.activities, { ...initialActivity }] };
        case ACTIONS.REMOVE_ACTIVITY:
            return { ...state, activities: state.activities.filter((_, index) => index !== action.index) };
        case ACTIONS.SET_IS_REQUIRED_FILLED:
            const newState = { ...state, isRequiredFilled: state.activities.every(activity => activity.activityType && activity.activityName && activity.level) };
            return newState;
        case ACTIONS.SET_CAN_SHOW_ALERT:
            return { ...state, canShowAlert: true };
        default:
            console.error('Invalid action type')
            return state;
    }
}

export const Activities = () => {
    const { singlePartId } = useParams();
    const {userInfo, setUserInfo, handleProfileComponentIdOnChange,updateComponentIdByParams} = useProfileContext();
    updateComponentIdByParams();
    const [state, dispatch] = useReducer(activitiesReducer, initialState);

    const handleInputChange = (index, event) => {
        dispatch({
            type: ACTIONS.SET_ACTIVITY,
            index,
            name: event.target.name,
            value: event.target.value,
        });
    };

    const handleAddClick = () => {
        dispatch({ type: ACTIONS.ADD_ACTIVITY });
    };

    const handleRemoveClick = (index) => {
        dispatch({ type: ACTIONS.REMOVE_ACTIVITY, index });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state.activities);
    };

    function handleLevelChange(index, newLevel) {
        dispatch({ type: ACTIONS.SET_ACTIVITY, index: index, name: 'level', value: newLevel });
    }

    function checkRequiredFilled() {
        dispatch({ type: ACTIONS.SET_IS_REQUIRED_FILLED});
    }

    function setCanShowAlert() {
        dispatch({ type: 'SET_CAN_SHOW_ALERT' });
    }

    return (
        <section onKeyUp={checkRequiredFilled} onMouseUp={checkRequiredFilled}>
            <h2>Activities</h2>
            <form onSubmit={handleSubmit}>
                {state.activities.map((activity, index) => (
                <div key={index} className={'relative pb-6'}>
                    <div className={'pr-6 grid grid-cols-[2fr_1fr]'}>
                        {/* col1 */}
                        <div className={'border-r'}>
                            <div className={"profileDiv"}>
                                <label className={'w-36'} htmlFor={`activityType${index}`}>Activity Type<RequireStar /></label>
                                <input
                                    type="text"
                                    id={`activityType${index}`}
                                    name="activityType"
                                    value={activity.activityType}
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                            </div>
                            <div className={"profileDiv"}>
                                <label className={'w-36'} htmlFor={`activityName${index}`}>Activity Name<RequireStar /></label>
                                <input
                                    type="text"
                                    id={`activityName${index}`}
                                    name="activityName"
                                    value={activity.activityName}
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                            </div>
                            <div className={"profileDiv items-start"}>
                                <label className={'w-36'} htmlFor={`details${index}`}>Details</label>
                                <textarea
                                    className="h-32 w-72 p-1 border border-slate-300"
                                    id={`details${index}`}
                                    name="details"
                                    value={activity.details}
                                    onChange={(event) => handleInputChange(index, event)}
                                ></textarea>
                            </div>
                        </div>
                        {/* col2 level */}
                        <div className="relative h-60">
                            <label htmlFor={`level${index}`}>Level<RequireStar /></label>
                            <div>
                                <span className="pl-12">{activity.level || 'N/A'}</span>
                            </div>
                            <svg
                                className="pyramid-svg absolute cursor-pointer"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: 'new 0 0 512 512' }}
                            >
                                <polygon
                                    className={'layer'}
                                    onClick={() => handleLevelChange(index,1)}
                                    style={{ fill: '#6AB2CC' }} points="46.929,392.549 0,471.592 512,471.592 465.071,392.549 ">
                                </polygon>
                                <polygon
                                    className={'layer'}
                                    onClick={() => handleLevelChange(index,2)}
                                    style={{ fill: '#71BDD9' }} points="112.555,282.013 68.771,355.76 443.229,355.76 399.444,282.013 " />
                                <polygon
                                    className={'layer'}
                                    onClick={() => handleLevelChange(index,3)}
                                    style={{ fill: '#78C9E6' }} points="178.183,171.478 134.398,245.223 377.601,245.223 333.817,171.478 " />
                                <polygon
                                    className={'layer'}
                                    onClick={() => handleLevelChange(index,4)}
                                    style={{ fill: '#7DD2F0' }} points="311.974,134.687 256,40.408 200.026,134.687 " />

                                <polygon
                                    className={'layer'}
                                    onClick={() => handleLevelChange(index,4)}
                                    style={{ opacity: 0.1, enableBackground: 'new' }} points="244.808,134.687 256,40.408 200.026,134.687 " />
                                <polygon
                                    className={'layer'}
                                    onClick={() => handleLevelChange(index,3)}
                                    style={{ opacity: 0.1, enableBackground: 'new' }} points="240.44,171.478 178.183,171.478 134.398,245.223 231.686,245.223" />
                                <polygon
                                    className={'layer'}
                                    onClick={() => handleLevelChange(index,2)}
                                    style={{ opacity: 0.1, enableBackground: 'new' }} points="227.319,282.013 112.555,282.013 68.771,355.76 218.564,355.76 " />
                                <polygon
                                    className={'layer'}
                                    onClick={() => handleLevelChange(index,1)}
                                    style={{ opacity: 0.1, enableBackground: 'new' }} points="214.197,392.549 46.929,392.549 0,471.592 204.813,471.592 " />

                                <text textAnchor="middle" x="256" y="110" fontSize="36" fill="white" >4</text>
                                <text textAnchor="middle" x="256" y="220" fontSize="36" fill="white">3</text>
                                <text textAnchor="middle" x="256" y="330" fontSize="36" fill="white">2</text>
                                <text textAnchor="middle" x="256" y="440" fontSize="36" fill="white">1</text>
                            </svg>
                            <div className="absolute bottom-9 right-3 flex flex-col gap-2">
                                <button
                                    className="p-3 border border-slate-300 hover:border-slate-700 rounded-md bg-white"
                                    onClick={() => handleInputChange(index, { target: { name: 'level', value: Math.min(4, activity.level + 1) } })}
                                >
                                    <AiOutlineArrowUp size={36} color={slate} />
                                </button>
                                <button
                                    className="p-3 border border-slate-300 hover:border-slate-700 rounded-md bg-white"
                                    onClick={() => handleInputChange(index, { target: { name: 'level', value: Math.max(1, activity.level - 1) } })}
                                >
                                    <AiOutlineArrowDown size={36} color={slate} />
                                </button>
                            </div>
                        </div>
                    </div>
                        <button
                            className={"absolute top-[-1rem] right-2 font-thin text-slate-200"}
                            type="button" onClick={() => handleRemoveClick(index)}>
                            Remove
                        </button>
                        <hr className={"mt-6"} />
                </div>
                ))}
                <div className="text-center">
                    <button type="button" onClick={handleAddClick}>
                        Add more activities
                    </button>
                </div>
            </form>
            <div className={"flex flex-row px-24 py-6"}>
                <div className={"flex-grow"} />
                <ProfilePreviousButton partParam={`/profile/${singlePartId}`} isActive={singlePartId !== 'basic-info'} />
                {/*<ProfileNextButton*/}
                {/*    isRequiredFilled={state.isRequiredFilled}*/}
                {/*    canShowAlert={state.canShowAlert}*/}
                {/*    setCanShowAlert={setCanShowAlert}*/}
                {/*    partParam={`/profile/${singlePartId}`}*/}
                {/*    isActive={singlePartId !== "activities"} />*/}
                <ProfileSubmitButton
                    canShowAlert={state.canShowAlert}
                    setCanShowAlert={setCanShowAlert}
                    isRequiredFilled={state.isRequiredFilled}
                    checkRequiredFilled={checkRequiredFilled}
                />
            </div>
        </section>
    );
};

export default Activities;
