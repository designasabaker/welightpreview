"use client"
import Link from "next/link";
import React from "react";
import {useUser} from "../context/userStore"

export default function Navbar() {
    const { hasLoggedIn } = useUser()
    return (
        <div className="navbar fixed top-0 left-0 w-full z-10 bg-white flex-row justify-between"> {/* fixed https://flowbite.com/docs/components/navbar/ */}
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">WeLight</Link>
                </div>
                <div className="w-full md:block md:w-auto space-x-8" id="navbar-default">
                    <ul className="flex-row">
                        <Link href="/pricing" className="btn btn-ghost normal-case pl-3 text-lg">Plan</Link> {/*name changed from 'pricing'*/}
                        <Link href="/about" className="btn btn-ghost normal-case pl-3 text-lg">About Us</Link>
                        {
                            hasLoggedIn ? (
                               <Link href="/form" className="btn btn-ghost normal-case pl-3 text-lg">Account</Link>
                            ) : (
                            <Link href="/login" className="btn btn-ghost normal-case pl-3 text-lg">Login</Link>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}