import {useParams} from 'react-router-dom';
import {Activities, Awards, BasicInfo, TestScore} from "../components/ProfileComponents";
import React from "react";
import ProfileNextButton from "../components/ProfileComponents/ProfileNextButton";
import ProfilePreviousButton from "../components/ProfileComponents/ProfilePreviousButton";
import InfoSummary from "../components/ProfileComponents/InfoSummary";
import SaveAsDraftBtn from "../components/ProfileComponents/SaveAsDraftBtn";

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
                {singlePartId === "info-summary" && <InfoSummary/>}
            </div>
            <div className={"flex-grow"} />

        </div>
    );
};

export default SingleProduct;
