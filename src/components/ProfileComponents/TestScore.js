import React, {useEffect, useState} from "react";
import {useProfileContext} from "../../context/profileContext";
import RequireStar from "../RequireStar";
import ProfilePreviousButton from "./ProfilePreviousButton";
import ProfileNextButton from "./ProfileNextButton";
import {useParams} from "react-router-dom";

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
const testTypes = ["四级", "六级", "TOEFL", "IELTS","GRE"];
const subScores = {
    "四级": ["听力", "阅读", "写作"],
    "六级": ["听力", "阅读", "写作"],
    "TOEFL": ["Listening", "Reading", "Writing", "Speaking"],
    "IELTS": ["Listening", "Reading", "Writing", "Speaking"],
    "GRE": ["Verbal", "Quantitative", "Writing"]
};

const initialTest = {
    testType: testTypes[0],
    score: "",
    isValidScore: true,
    subScores: generateInitialSubScores(testTypes[0]),
    isValidSubScores: generateInitialSubScoreValidity(testTypes[0])
};
function generateInitialSubScores(testType) {
    const scores = {};
    subScores[testType].forEach(subScore => scores[subScore] = "");
    return scores;
}
function generateInitialSubScoreValidity(testType) {
    const isValid = {};
    subScores[testType].forEach(subScore => isValid[subScore] = true);
    return isValid;
}

export default function TestScore() {
    const singlePartId = useParams().singlePartId;
    const {userInfo, setUserInfo, handleProfileComponentIdOnChange,updateComponentIdByParams} = useProfileContext();
    updateComponentIdByParams();

    const [tests, setTests] = useState([initialTest]);

    const [isRequiredFilled, setIsRequiredFilled] = React.useState(false);
    const [isLegalScore, setIsLegalScore] = React.useState(true);
    const [canShowAlert, setCanShowAlert] = React.useState(false);

    function checkRequiredFilled() {
        const filledFlag = tests.every((test) => {
            return test.score !== "";
        });
        setIsRequiredFilled(filledFlag);
        console.log("checkRequiredFilled", filledFlag)
    }

    function checkLegalScore(){
        const totalScoreFlag = tests.every((test) => {
            return test.isValidScore ;
        });
        const subScoreFlag = tests.every((test) => {
            return Object.values(test.isValidSubScores).every((isValidSubScore) => {
                return isValidSubScore;
            });
        })
        console.log("checkLegalScore", totalScoreFlag && subScoreFlag)
        setIsLegalScore(totalScoreFlag && subScoreFlag);
        return totalScoreFlag && subScoreFlag;
    }

    useEffect(() => {
        setUserInfo({...userInfo, testScore: tests});
    }, [tests]);

    function handleInputChange(index, event){
        const values = [...tests];
        values[index][event.target.name] = event.target.value;
        if (event.target.name === "testType") {
            values[index].subScores = generateInitialSubScores(event.target.value);
            values[index].isValidSubScores = generateInitialSubScoreValidity(event.target.value);
        }
        setTests(values);
    }

    function handleAddClick(){
        setTests([...tests, { ...initialTest }]);
    }

    function handleSubScoreChange(index, subScore, event){
        const values = [...tests];
        const thisTest = values[index];
        thisTest.subScores[subScore] = event.target.value;
        thisTest.isValidSubScores[subScore] = event.target.value <= maxSubScores[tests[index].testType];
        setTests(values);
    }

    function handleRemoveClick(index){
        const values = [...tests];
        values.splice(index, 1);
        setTests(values);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(tests);
    }

    return (
        <section onKeyUp={checkRequiredFilled}>
            <h2>Test Score</h2>
            <form onSubmit={handleSubmit}>
                {/* test */}
                {tests.map((test, index) => (
                    <div key={index} className={"relative pb-6"}>
                        <div className={"profileDiv"}>
                            <label htmlFor={"testType"}>Test Type<RequireStar /></label>
                            <select
                                className={"w-36"}
                                required={true}
                                name="testType"
                                value={test.testType}
                                onChange={event => handleInputChange(index, event)}
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
                                className={`w-24 ${(canShowAlert && !tests[index].score) && "border-2 border-red-500 animate-pulse"}`}
                                type="number"
                                name="score"
                                value={test.score}
                                onChange={event => handleInputChange(index, event)}
                                placeholder=""/>
                        </div>
                        {/* sub score */}
                        <div className={"profileDiv ml-12"}>
                            {subScores[test.testType].map(subScore => (
                                <>
                                    <label
                                        className={"w-auto ml-0 mr-3"}
                                        htmlFor={subScore}>{subScore}</label>
                                    <input
                                        key={subScore}
                                        className={"w-24 mr-6"}
                                        className={tests[index].isValidSubScores[subScore] ? "" : "border-2 border-red-500 animate-pulse"}  // Apply a red border if the score is not valid.
                                        type="number"
                                        name={subScore}
                                        value={test.subScores[subScore] || ''}
                                        onChange={event => {
                                            handleSubScoreChange(index, subScore, event); // local check and update to state
                                            checkLegalScore(); // global check
                                        }}
                                        placeholder={``}
                                    />
                                </>
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
                    onClick={() => handleAddClick()}>
                        Add more tests
                    </button>
                </div>
                {/*<button type="submit">Submit</button>*/}
            </form>
            <div className={"flex flex-row px-24 py-6"}>
                <div className={"flex-grow"} />
                <ProfilePreviousButton partParam={`/profile/${singlePartId}`} isActive={singlePartId !== 'basic-info'} />
                <ProfileNextButton isLegalScore={isLegalScore} isRequiredFilled={isRequiredFilled} canShowAlert={canShowAlert} setCanShowAlert={setCanShowAlert} partParam={`/profile/${singlePartId}`} isActive={singlePartId !== "activities"} />
            </div>
        </section>
    )
}