import React from "react";
import Link from "next/link";
import Image from 'next/image'

export default function Home() {
    return (
        <div className="grid grid-rows-2 gap-2 w-full ">

            <div className="grid grid-cols-2 gap-5 w-full">
                <div className="grid grid-rows-3 items-center">
                    <h1 className="text-5xl font-bold">MISSION + VISION</h1>
                    <a className="text-2xl font-bold">Our Mission</a>
                    <Link href="/" className="text-2xl font-bold">Get started</Link>
                </div>

                <Image src="/assets/images/holder.jpg" alt="Picture of the homepage" width={600} height={600} />

            </div>

            <div className="grid grid-cols-3 gap-2 w-full ">
                <div className="items-center">
                    step 1
                </div>
                <div className="items-center">
                    step 2
                </div>
                <div className="items-center">
                    step 3
                </div>
            </div>
        </div>
    )
}