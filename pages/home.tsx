import React from "react";
import Link from "next/link";
import Image from 'next/image'

export default function Home() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/assets/images/holder.svg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Our Mission</h1>
                    <p className="py-6">some description</p>
                    <Link href= "/login" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    )
}