import React from "react";
import { useState } from "react";

import {data as ImagesData}  from "../../Data/ImageGallery/data";
import GalleryPrevBtn from "./GalleryPrevBtn";
import GalleryNextBtn from "./GalleryNextBtn";

export const  ImageGallery = () => {
    const [displayId, setDisplayId] = useState(1);

    const displayData = ImagesData.find((item) => item.id === displayId);
    console.log(displayData)

    function nextImage(){
        if (displayId < ImagesData.length) {
            setDisplayId(displayId + 1);
        } else {
            setDisplayId(1);
        }
    }

    function prevImage(){
        if (displayId > 1) {
            setDisplayId(displayId - 1);
        } else {
            setDisplayId(ImagesData.length);
        }
    }

    return(
        <div
            className={"max-w-[600px] min-w-[400px] h-full overflow-hidden"}
            style={{
                background: `url(${displayData.image}) center center / cover no-repeat`,
            }}
        >
            {displayData.name}
            {displayData.title}
            {displayData.slogan}
            <GalleryPrevBtn onClick={prevImage} />
            <GalleryNextBtn onClick={nextImage} />
        </div>
    )
}

export default ImageGallery;