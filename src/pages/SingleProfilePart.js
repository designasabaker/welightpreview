import {useParams} from 'react-router-dom';
import {Activities, Awards, BasicInfo, TestScore} from "../components/ProfileComponents";
import React from "react";
import ProfileNextButton from "../components/ProfileComponents/ProfileNextButton";
import ProfilePreviousButton from "../components/ProfileComponents/ProfilePreviousButton";

const SingleProduct = () => {
    const singlePartId = useParams().singlePartId;
    // console.log("singlePartId", singlePartId);

    return (
        <div className={"flex flex-col h-[70vh]"}>
            <div>
                {singlePartId === "basic-info" && <BasicInfo/>}
                {singlePartId === "test-score" && <TestScore/>}
                {singlePartId === "awards" && <Awards/>}
                {singlePartId === "activities" && <Activities/>}
            </div>
            <div className={"flex-grow"} />
            <div className={"flex flex-row px-24 py-6"}>
                <div className={"flex-grow"} />
                <ProfilePreviousButton partParam={`/profile/${singlePartId}`} isActive={singlePartId !== 'basic-info'} />
                <ProfileNextButton partParam={`/profile/${singlePartId}`} isActive={singlePartId !== "activities"} />
            </div>
        </div>
    );
};

export default SingleProduct;
