import React, {useEffect} from 'react';
import { useProfileContext } from "../../context/profileContext";

const InfoSummary = () => {
    const { userInfo, updateComponentIdByParams } = useProfileContext();
    updateComponentIdByParams();

    useEffect(() => {
        console.log('userInfo: ', userInfo)
    },[])

    return (
        <section>
            <div>
                <h2>Summary</h2>
                <p>First Name: {userInfo.firstName}</p>
                <p>Last Name: {userInfo.lastName}</p>
                <p>BirthDate: {userInfo.birthDate}</p>
                <p>Nation: {userInfo.nation}</p>
                <p>School: {userInfo.school}</p>
                <p>Exam:</p>
                <pre>{JSON.stringify(userInfo.testScore, null, 2)}</pre>
                <p>Awards:</p>
                <pre>{JSON.stringify(userInfo.awards, null, 2)}</pre>
                <p>Activities:</p>
                <pre>{JSON.stringify(userInfo.activities, null, 2)}</pre>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </section>
    );
}

export default InfoSummary;
