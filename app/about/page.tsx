import React from "react";
import Home from "../../pages/home";
import Link from "next/link";

export default function About() {
    return (
        // <Home />
        <div className="flex flex-col items-center mt-20">
            <img
                src="/assets/images/holder.svg"
                className="max-w-md rounded-lg shadow-2xl"
                alt="about us main image"
            />
            <div className="flex flex-col items-center py-10">
                <h1 className="text-5xl font-bold">Our Mission</h1>
                <p className="py-6 max-w-lg">some description Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <Link
                    href= "/login"
                    className="z-50 w-40 px-4 py-2 mt-10 tracking-wide text-white text-center capitalize transition-colors duration-300 transform bg-brandBlue rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                    Get Started
                </Link>
            </div>
        </div>
    )
}