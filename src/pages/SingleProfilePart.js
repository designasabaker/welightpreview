import {useParams} from 'react-router-dom';
import {Activities, Awards, BasicInfo, TestScore} from "../components/ProfileComponents";
import React from "react";
import ProfileNextButton from "../components/ProfileComponents/ProfileNextButton";

const SingleProduct = () => {
    const {singlePartId} = useParams();
    console.log("singlePartId",singlePartId);
    function renderSwitch(param) {
        switch(param) {
            case "test-score":
                return <TestScore/>
            case "awards":
                return <Awards/>
            case "activities":
                return <Activities/>
            default:
                return <BasicInfo/>;
        }
    }

    return (
        <>
            {renderSwitch(singlePartId)}
            <ProfileNextButton partParam={`/profile/${singlePartId}`}/>
        </>
    );
};

export default SingleProduct;
