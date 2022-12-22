import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">WeLight</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link href="/pricing" className="btn btn-ghost normal-case text-lg">Pricing</Link>
                    <Link href="/about" className="btn btn-ghost normal-case text-lg">About Us</Link>
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost normal-case text-lg">Login</Link>
                        <Link href="/" className="btn btn-ghost normal-case text-lg">Sign Up</Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}