import React, {useEffect, useState, useReducer} from "react";
import {useProfileContext} from "../../context/profileContext";
import RequireStar from "../RequireStar";
import ProfilePreviousButton from "./ProfilePreviousButton";
import ProfileNextButton from "./ProfileNextButton";
import {useParams} from "react-router-dom";
import {AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai";
import {FiArrowUpCircle, FiArrowDownCircle} from "react-icons/fi";

const slate = '#C0C2C9';
const initialAward = { awardName: "", grade: "", type: "", subject: "", level: "" };

const ACTIONS = {
    SET_AWARD: 'SET_AWARD',
    ADD_AWARD: 'ADD_AWARD',
    REMOVE_AWARD: 'REMOVE_AWARD',
    SET_IS_REQUIRED_FILLED: 'SET_IS_REQUIRED_FILLED',
    SET_CAN_SHOW_ALERT: 'SET_CAN_SHOW_ALERT',
}

function awardsReducer(state, action) {
    switch(action.type) {
        case ACTIONS.SET_AWARD:
            return {
                ...state,
                awards: state.awards.map((award, index) => index === action.index ? { ...award, [action.name]: action.value } : award) };
        case ACTIONS.ADD_AWARD:
            return { ...state, awards: [...state.awards, {...initialAward}] };
        case ACTIONS.REMOVE_AWARD:
            return { ...state, awards: state.awards.filter((_, index) => index !== action.index) };
        case ACTIONS.SET_IS_REQUIRED_FILLED:
            return {
                ...state,
                isRequiredFilled: state.awards.every((award) => award.awardName !== "" && award.grade !== "" && award.type !== "" && award.subject !== "" && award.level !== "") };
        case ACTIONS.SET_CAN_SHOW_ALERT:
            return { ...state, canShowAlert: true };
        default:
            return state;
    }
}

export default function Awards() {
    const singlePartId = useParams().singlePartId;
    const {userInfo, setUserInfo, handleProfileComponentIdOnChange,updateComponentIdByParams} = useProfileContext();
    updateComponentIdByParams();

    const initialState = {
        awards:  Array.isArray(userInfo.awards) ? userInfo.awards : [initialAward],
        isRequiredFilled: false,
        canShowAlert: false,
    };

    const [state, dispatch] = useReducer(awardsReducer, initialState);

    useEffect(()=>{
        setUserInfo({...userInfo, awards: state.awards});
    },[state.awards])

    function checkRequiredFilled() {
        // any false
        // const filledFlag = state.awards.every((test) => {
        //     return test.awardName !== "" &&
        //         test.grade !== "" &&
        //         test.type !== "" &&
        //         test.subject !== "" &&
        //         test.level !== "";
        // });
        dispatch({ type: 'SET_IS_REQUIRED_FILLED'});
        //console.log("checkRequiredFilled", filledFlag)
    }

    function handleInputChange(index, event) {
        dispatch({
            type: ACTIONS.SET_AWARD,
            index: index, name: event.target.name, value: event.target.value });
    }

    function handleAddClick() {
        dispatch({ type: ACTIONS.ADD_AWARD });
    }

    function handleRemoveClick(index) {
        dispatch({ type: 'REMOVE_AWARD', index: index });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(state.awards);
    }

    function handleLevelChange(index, newLevel) {
        dispatch({ type: ACTIONS.SET_AWARD, index: index, name: 'level', value: newLevel });
    }

    function setCanShowAlert() {
        dispatch({ type: 'SET_CAN_SHOW_ALERT' });
    }

    useEffect(function() {
        setUserInfo({...userInfo, awards: state.awards});
        dispatch({ type: 'SET_IS_REQUIRED_FILLED' });
    }, [state.awards]);

    return (
        <section onKeyUp={checkRequiredFilled} onMouseUp={checkRequiredFilled}>
            <h2>Awards</h2>
            <form onSubmit={handleSubmit}>
                {state.awards.map((test, index) => (
                    <div className={'relative pb-6'}>
                        <div key={index}  className={'pr-6 grid grid-cols-[2fr_1fr]'}>
                            {/* col no.1 */}
                            <div className={'border-r'}>
                                <div className={"profileDiv"}>
                                    <label className={"w-36"} htmlFor={`awardName${index}`}>Award Name<RequireStar /></label>
                                    <input
                                        type="text"
                                        id={`awardName${index}`}
                                        name="awardName"
                                        value={test.awardName}
                                        onChange={event => handleInputChange(index, event)}
                                    />
                                    <label htmlFor={`grade${index}`}>Grade<RequireStar /></label>
                                    <input
                                        type="text"
                                        id={`grade${index}`}
                                        name="grade"
                                        value={test.grade}
                                        onChange={event => handleInputChange(index, event)}
                                    />
                                </div>
                                <div className={"profileDiv"}>
                                    <label className={"w-36"} htmlFor={`type${index}`}>Type<RequireStar /></label>
                                    <input
                                        type="text"
                                        id={`type${index}`}
                                        name="type"
                                        value={test.type}
                                        onChange={event => handleInputChange(index, event)}
                                    />

                                    <label htmlFor={`subject${index}`}>Subject<RequireStar /></label>
                                    <input
                                        type="text"
                                        id={`subject${index}`}
                                        name="subject"
                                        value={test.subject}
                                        onChange={event => handleInputChange(index, event)}
                                    />
                                </div>
                            </div>
                            {/* col no.2 level */}
                            <div className={"relative h-60"}>
                                <label htmlFor={`level${index}`}>Level<RequireStar /></label>
                                <div>
                                    <span className={'pl-12'}>{test.level || 'N/A'}</span>
                                </div>
                                {/*<div className="w-full pyramid absolute text-center z-10">*/}
                                {/*    <div className="layer" onClick={() => handleLevelChange(index,4)}>4</div>*/}
                                {/*    <div className="layer" onClick={() => handleLevelChange(index,3)}>3</div>*/}
                                {/*    <div className="layer" onClick={() => handleLevelChange(index,2)}>2</div>*/}
                                {/*    <div className="layer" onClick={() => handleLevelChange(index,1)}>1</div>*/}
                                {/*</div>*/}
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

                                <div className={'absolute bottom-9 right-3 flex flex-col gap-2'}>
                                    <button
                                        className={'p-3 border border-slate-300 hover:border-slate-700 rounded-md bg-white'}
                                        onClick={() => handleLevelChange(index, Math.min(4, test.level + 1))}>
                                        <AiOutlineArrowUp size={36} color={slate} />
                                    </button>
                                    <button
                                        className={'p-3 border border-slate-300 hover:border-slate-700 rounded-md bg-white'}
                                        onClick={() => handleLevelChange(index, Math.max(1, test.level - 1))}>
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
                <div className={"text-center"}>
                    <button
                        type="button"
                        onClick={() => handleAddClick()}>
                        Add more tests
                    </button>
                </div>
            </form>
            <div className={"flex flex-row px-24 py-6"}>
                <div className={"flex-grow"} />
                <ProfilePreviousButton partParam={`/profile/${singlePartId}`} isActive={singlePartId !== 'basic-info'} />
                <ProfileNextButton
                    isRequiredFilled={state.isRequiredFilled}
                    canShowAlert={state.canShowAlert}
                    setCanShowAlert={setCanShowAlert}
                    partParam={`/profile/${singlePartId}`}
                    isActive={singlePartId !== "activities"} />
            </div>
        </section>
    );
}