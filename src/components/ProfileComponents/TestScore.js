import React, {useEffect, useState} from "react";
import {useProfileContext} from "../../context/profileContext";
import RequireStar from "../RequireStar";
import ProfilePreviousButton from "./ProfilePreviousButton";
import ProfileNextButton from "./ProfileNextButton";
import {useParams} from "react-router-dom";

export default function TestScore() {
    const singlePartId = useParams().singlePartId;
    const {handleProfileComponentIdOnChange,updateComponentIdByParams} = useProfileContext();
    updateComponentIdByParams();

    const testTypes = ["四级", "六级", "TOEFL", "IELTS","GRE"];
    const subScores = {
        "四级": ["听力", "阅读", "写作"],
        "六级": ["听力", "阅读", "写作"],
        "TOEFL": ["Listening", "Reading", "Writing", "Speaking"],
        "IELTS": ["Listening", "Reading", "Writing", "Speaking"],
        "GRE": ["Verbal", "Quantitative", "Writing"]
    };
    const initialTest = { testType: testTypes[0], score: "", subScores: { } };

    const [tests, setTests] = useState([
        initialTest
    ]);

    const [isRequiredFilled, setIsRequiredFilled] = React.useState(false);
    const [canShowAlert, setCanShowAlert] = React.useState(false);

    function checkRequiredFilled() {
        const flag = tests.every((test) => {
            return test.score !== "";
        });
        console.log("checkRequiredFilled", flag)
        setIsRequiredFilled(flag);
    }

    const handleInputChange = (index, event) => {
        const values = [...tests];
        values[index][event.target.name] = event.target.value;
        setTests(values);
    };

    const handleAddClick = () => {
        setTests([...tests, initialTest]);
    };

    const handleSubScoreChange = (index, subScore, event) => {
        const values = [...tests];
        values[index].subScores[subScore] = event.target.value;
        setTests(values);
    };

    const handleRemoveClick = index => {
        const values = [...tests];
        values.splice(index, 1);
        setTests(values);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(tests);
    };

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
                                        type="number"
                                        name={subScore}
                                        value={test.subScores[subScore] || ''}
                                        onChange={event => handleSubScoreChange(index, subScore, event)}
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
                <button
                    className={"w-full text-center"}
                    type="button"
                    onClick={() => handleAddClick()}>
                    Add more tests
                </button>
                {/*<button type="submit">Submit</button>*/}
            </form>
            <div className={"flex flex-row px-24 py-6"}>
                <div className={"flex-grow"} />
                <ProfilePreviousButton partParam={`/profile/${singlePartId}`} isActive={singlePartId !== 'basic-info'} />
                <ProfileNextButton isRequiredFilled={isRequiredFilled} canShowAlert={canShowAlert} setCanShowAlert={setCanShowAlert} partParam={`/profile/${singlePartId}`} isActive={singlePartId !== "activities"} />
            </div>
        </section>
    )
}