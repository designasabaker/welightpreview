import React, {useEffect} from 'react';
import { useProfileContext } from "../../context/profileContext";
import {AiFillAlipayCircle, AiOutlineCloudUpload} from "react-icons/ai";

const InfoSummary = () => {
    const { userInfo, updateComponentIdByParams,setLocalStorage } = useProfileContext();
    updateComponentIdByParams();

    function handleSubmit() {
        console.log(userInfo);
        setLocalStorage();
        alert("Your profile has been saved successfully!")
    }

    useEffect(() => {
        console.log('userInfo: ', userInfo)
    },[])

    return (
        <div>
            <h2>Summary</h2>
            <section className={'h-full grid grid-cols-[2fr_2fr]'}>
                <div className={'pl-3 border-r border-r-sky-50'}>
                    <h4>Basic Info</h4>
                    <p>First Name: {userInfo.firstName}&nbsp; Last Name: {userInfo.lastName}</p>
                    <p>BirthDate: {userInfo.birthDate}&nbsp; Nation: {userInfo.nation}&nbsp; School: {userInfo.school}</p>
                    <h4>Exam:</h4>
                    <pre>
                        {/*{JSON.stringify(userInfo.testScore, null, 2)}*/}
                        {Array.isArray(userInfo.testScore) && userInfo.testScore.map((score, index) => {
                            return (
                                <div key={index} className={'pt-1'}>
                                    <p>{score.testType}: {score.score}</p>
                                    <p>section scores: &nbsp;
                                        {score.subScores && Object.entries(score.subScores).map(([key, value],index) => {
                                            if(value === null || value === '') return null;
                                            return (
                                                <span key={index} className={'mr-3'}>
                                                    {key}:{value}
                                                </span>
                                            )
                                        })}
                                    </p>
                                </div>
                            )})
                        }
                    </pre>
                    <h4>Awards:</h4>
                    <pre>
                        {/*{JSON.stringify(userInfo.awards, null, 2)}*/}
                        {Array.isArray(userInfo.awards) && userInfo.awards.map((award, index) => {
                            if(award.awardName === null || award.awardName === '') return <p>N/A</p>;
                            return (
                                <div key={index}>
                                    <p>name: {award.awardName} grade: {award.grade}</p>
                                    <p>type: {award.type}</p>
                                    <p>subject: {award.subject}</p>
                                    <p>level: {award.level}</p>
                                </div>
                            )})}
                    </pre>
                    <h4>Activities:</h4>
                    <pre>
                        {/*{JSON.stringify(userInfo.activities, null, 2)}*/}
                        {Array.isArray(userInfo.activities) && userInfo.activities.map((activity, index) => {
                            if(activity.activityName === null || activity.activityName === '') return <p>N/A</p>;
                            return (
                                <div key={index}>
                                    <p>name: {activity.activityName}</p>
                                    <p>type: {activity.activityType}</p>
                                    <p>level: {activity.level}</p>
                                </div>
                            )})
                        }
                    </pre>
                </div>
                <div className={'w-full h-full flex flex-row justify-center items-center text-slate-500'}>
                    <button onClick={handleSubmit} ><AiOutlineCloudUpload color={'#5B7C99'} size={72}/>Submit</button>
                </div>
            </section>
        </div>
    );
}

export default InfoSummary;
