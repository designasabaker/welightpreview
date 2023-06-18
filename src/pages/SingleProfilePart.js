import {useParams} from 'react-router-dom';
import {Activities, Awards, BasicInfo, TestScore} from "../components/ProfileComponents";
import React from "react";
import ProfileNextButton from "../components/ProfileComponents/ProfileNextButton";
import ProfilePreviousButton from "../components/ProfileComponents/ProfilePreviousButton";

const SingleProduct = () => {
    const singlePartId = useParams().singlePartId;
    // console.log("singlePartId", singlePartId);

    return (
        <div className={"flex flex-col"}>
            <div>
                {singlePartId === "basic-info" && <BasicInfo/>}
                {singlePartId === "test-score" && <TestScore/>}
                {singlePartId === "awards" && <Awards/>}
                {singlePartId === "activities" && <Activities/>}
            </div>
            <div className={"py-6"}>
                <ProfilePreviousButton partParam={`/profile/${singlePartId}`} isActive={singlePartId !== 'basic-info'} />
                <ProfileNextButton partParam={`/profile/${singlePartId}`} isActive={singlePartId !== "activities"} />
            </div>
        </div>
    );
};

export default SingleProduct;
