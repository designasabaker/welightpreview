"use client"
import Link from "next/link";
import React from "react";
import {useUser} from "../context/userStore"

export default function Navbar() {
    const { hasLoggedIn } = useUser()
    return (
        <div className="navbar fixed top-0 left-0 w-full z-10"> {/* fixed */}
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">WeLight</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link href="/pricing" className="btn btn-ghost normal-case text-lg">Plan</Link> {/*name changed from 'pricing'*/}
                    <Link href="/about" className="btn btn-ghost normal-case text-lg">About Us</Link>
                    {
                        hasLoggedIn ? (
                            <div className="flex-1">
                                <Link href="/form" className="btn btn-ghost normal-case text-lg">Account</Link>
                            </div>
                        ) : (
                            <div className="flex-1">
                                <Link href="/login" className="btn btn-ghost normal-case text-lg">Login</Link>
                                {/*<Link href="/signup" className="btn btn-ghost normal-case text-lg">Sign Up</Link>*/}
                            </div>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}