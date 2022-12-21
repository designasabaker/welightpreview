import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className=" flex flex-row p-5 bg-blue-400 place-items-end">
            <Link href="/" className='px-3 ml-60 mr-96 py-1 bg-white text-blue-500 rounded-lg'>
                WeLight
            </Link>
            <Link href="/profile" className='px-3 mx-5 py-1 bg-white text-blue-500 rounded-lg'>
                Profile
            </Link>
            <Link href="/resources" className='px-3 mx-5 py-1 bg-white text-blue-500 rounded-lg'>
                Resources
            </Link>
            <Link href="/about" className='px-3 mx-5 py-1 bg-white text-blue-500 rounded-lg'>
                About Us
            </Link>
        </header>
    )
}