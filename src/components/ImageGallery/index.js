import React, {useEffect} from "react";
import { useState } from "react";

import {data as ImagesData}  from "../../Data/ImageGallery/data";
import GalleryPrevBtn from "./GalleryPrevBtn";
import GalleryNextBtn from "./GalleryNextBtn";

export const  ImageGallery = () => {
    const [displayId, setDisplayId] = useState(1);

    const displayData = ImagesData.find((item) => item.id === displayId);
    // console.log(displayData)
    useEffect(() => {
        const T = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(T);
    });

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
            className={"w-[400px] h-full overflow-hidden relative flex flex-col align-bottom p-4 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"}
            style={{
                background: `url(${displayData.image}) center center / cover no-repeat`,
            }}
        >
            <div className={"flex-1"} /> {/* This is a spacer */}
            <p className={"text-white py-3"}>{displayData.slogan}</p>
            <div>
                <p className={"text-white py-0"}>{displayData.name}</p>
                <p className={"text-white font-thin py-0"}>{displayData.title}</p>
            </div>
            <div className={"absolute bottom-0 right-0 p-4 text-white"}>
                <GalleryPrevBtn onClick={prevImage} />
                <GalleryNextBtn onClick={nextImage} />
            </div>
        </div>
    )
}

export default ImageGallery;