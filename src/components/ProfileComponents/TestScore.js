import React, { useEffect, useReducer } from "react";
import { useProfileContext } from "../../context/profileContext";
import RequireStar from "../RequireStar";
import ProfilePreviousButton from "./ProfilePreviousButton";
import ProfileNextButton from "./ProfileNextButton";
import { useParams } from "react-router-dom";

const maxScores = {
    "四级": 710,
    "六级": 710,
    "TOEFL": 120,
    "IELTS": 9,
    "GRE": 340
};
const maxSubScores = {
    "四级": 250,
    "六级": 250,
    "TOEFL": 30,
    "IELTS": 9,
    "GRE": 170
};
const testTypes = ["四级", "六级", "TOEFL", "IELTS", "GRE"];
const subScores = {
    "四级": ["听力", "阅读", "写作"],
    "六级": ["听力", "阅读", "写作"],
    "TOEFL": ["Listening", "Reading", "Writing", "Speaking"],
    "IELTS": ["Listening", "Reading", "Writing", "Speaking"],
    "GRE": ["Verbal", "Quantitative", "Writing"]
};

const ACTIONS = {
    SET_TESTS: "SET_TESTS",
    ADD_TEST: "ADD_TEST",
    REMOVE_TEST: "REMOVE_TEST",
    SET_TEST_TYPE: "SET_TEST_TYPE",
    SET_SCORE: "SET_SCORE",
    SET_SUB_SCORE: "SET_SUB_SCORE",
    SET_IS_REQUIRED_FILLED: "SET_IS_REQUIRED_FILLED",
    SET_IS_LEGAL_SCORE: "SET_IS_LEGAL_SCORE",
    SET_CAN_SHOW_ALERT: "SET_CAN_SHOW_ALERT"
};

function testScoreReducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_TESTS:
            return { ...state, tests: action.tests };
        case ACTIONS.SET_TEST_TYPE:
            return {
                ...state,
                tests: state.tests.map((test, index) =>
                    index === action.index ? { ...test, testType: action.testType } : test
                ),
            };
        case ACTIONS.ADD_TEST:
            return {
                ...state,
                tests: [...state.tests, { ...action.test }],
            };
        case ACTIONS.REMOVE_TEST:
            return {
                ...state,
                tests: state.tests.filter((_, index) => index !== action.index),
            };
        case ACTIONS.SET_SCORE:
            return {
                ...state,
                tests: state.tests.map((test, index) =>
                    index === action.index ? { ...test, score: action.score } : test
                ),
            };
        case ACTIONS.SET_SUB_SCORE:
            return {
                ...state,
                tests: state.tests.map((test, index) =>
                    index === action.testIndex
                        ? {
                            ...test,
                            subScores: {
                                ...test.subScores,
                                [action.subScore]: action.score,
                            },
                        }
                        : test
                ),
            };
        case ACTIONS.SET_IS_REQUIRED_FILLED:
            const isRequiredFilled = state.tests.every((test) => test.score !== "");
            return { ...state, isRequiredFilled };
        case ACTIONS.SET_IS_LEGAL_SCORE:
            const isLegalScore = state.tests.every(
                (test) =>
                    test.isValidScore &&
                    Object.values(test.isValidSubScores).every((isValidSubScore) => isValidSubScore)
            );
            return { ...state, isLegalScore };
        case ACTIONS.SET_CAN_SHOW_ALERT:
            return { ...state, canShowAlert: true };
        default:
            console.error("Invalid action type");
            return state;
    }
}

const initialTest = {
    testType: testTypes[0],
    score: "",
    isValidScore: true,
    subScores: generateInitialSubScores(testTypes[0]),
    isValidSubScores: generateInitialSubScoreValidity(testTypes[0]),
    canShowAlert: false,
};

function generateInitialSubScores(testType) {
    const scores = {};
    subScores[testType].forEach((subScore) => (scores[subScore] = ""));
    return scores;
}

function generateInitialSubScoreValidity(testType) {
    const isValid = {};
    subScores[testType].forEach((subScore) => (isValid[subScore] = true));
    return isValid;
}

export default function TestScore() {
    const singlePartId = useParams().singlePartId;
    const { userInfo, setUserInfo, handleProfileComponentIdOnChange, updateComponentIdByParams } = useProfileContext();
    updateComponentIdByParams();

    const initialState = {
        tests: userInfo.testScore || [initialTest],
        isRequiredFilled: false,
        isLegalScore: true,
        canShowAlert: false,
    };

    const [state, dispatch] = useReducer(testScoreReducer, initialState);

    useEffect(() => {
        setUserInfo({ ...userInfo, testScore: state.tests });
    }, [state]);

    function handleTestTypeChange(index, event) {
        dispatch({ type: ACTIONS.SET_TEST_TYPE, index, testType: event.target.value });
    }
    function handleInputChange(index, event) {
        dispatch({ type: ACTIONS.SET_SCORE, index, score: event.target.value });
    }

    function handleSubScoreChange(testIndex, subScore, event) {
        const score = event.target.value;
        const isValidScore = score <= maxSubScores[state.tests[testIndex].testType];
        dispatch({ type: ACTIONS.SET_SUB_SCORE, testIndex, subScore, score });
        dispatch({ type: ACTIONS.SET_IS_LEGAL_SCORE });
    }

    function handleAddClick() {
        dispatch({ type: ACTIONS.ADD_TEST, test: initialTest });
    }

    function handleRemoveClick(index) {
        dispatch({ type: ACTIONS.REMOVE_TEST, index });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(state.tests);
    }

    function checkRequiredFilled() {
        dispatch({ type: ACTIONS.SET_IS_REQUIRED_FILLED });
    }

    function checkLegalScore() {
        dispatch({ type: ACTIONS.SET_IS_LEGAL_SCORE });
    }

    function setCanShowAlert() {
        dispatch({ type: ACTIONS.SET_CAN_SHOW_ALERT });
    }

    return (
        <section onKeyUp={checkRequiredFilled}>
            <h2>Test Score</h2>
            <form onSubmit={handleSubmit}>
                {/* test */}
                {state.tests.map((test, index) => (
                    <div key={index} className={"relative pb-6"}>
                        <div className={"profileDiv"}>
                            <label htmlFor={"testType"}>Test Type<RequireStar /></label>
                            <select
                                className={"w-36"}
                                required={true}
                                name="testType"
                                value={test.testType}
                                onChange={(event) => handleTestTypeChange(index, event)}
                            >
                                {testTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* total score */}
                        <div className={"profileDiv"}>
                            <label
                                className={"w-15 "}
                                htmlFor={"score"}>Total Score<RequireStar /></label>
                            <input
                                className={`w-24 ${(state.canShowAlert && !test.score) && "border-2 border-red-500 animate-pulse"}`}
                                type="number"
                                name="score"
                                value={test.score}
                                onChange={(event) => handleInputChange(index, event)}
                                placeholder=""
                            />
                        </div>
                        {/* sub score */}
                        <div className={"profileDiv ml-12"}>
                            {subScores[test.testType].map((subScore) => (
                                <div key={subScore} className={"flex items-center mb-3"}>
                                    <label className={"w-auto ml-0 mr-3"} htmlFor={subScore}>{subScore}</label>
                                    <input
                                        key={subScore}
                                        className={`w-24 ${state.canShowAlert && !state.tests[index].isValidSubScores[subScore] && "border-2 border-red-500 animate-pulse"}`}
                                        type="number"
                                        name={subScore}
                                        value={test.subScores[subScore] || ''}
                                        onChange={(event) => {
                                            handleSubScoreChange(index, subScore, event);
                                            checkLegalScore();
                                        }}
                                        placeholder={``}
                                    />
                                </div>
                            ))}
                        </div>
                        <hr className={"mt-6"} />
                        <button
                            className={"absolute top-3 right-3 font-thin text-slate-400"}
                            type="button" onClick={() => handleRemoveClick(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <div className={"text-center"}>
                    <button
                        type="button"
                        onClick={handleAddClick}>
                        Add more tests
                    </button>
                </div>
            </form>
            <div className={"flex flex-row px-24 py-6"}>
                <div className={"flex-grow"} />
                <ProfilePreviousButton partParam={`/profile/${singlePartId}`} isActive={singlePartId !== 'basic-info'} />
                <ProfileNextButton
                    isLegalScore={state.isLegalScore}
                    isRequiredFilled={state.isRequiredFilled}
                    canShowAlert={state.canShowAlert}
                    setCanShowAlert={setCanShowAlert}
                    partParam={`/profile/${singlePartId}`}
                    isActive={singlePartId !== "activities"}
                />
            </div>
        </section>
    )
}
