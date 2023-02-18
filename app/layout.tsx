"use client"

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { UserProvider } from "../context/userStore";
import React from "react";

export default function RouteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <UserProvider>
            <html>
                <head>
                    <title>WeLight</title>
                </head>
                <body>
                    <Navbar />
                    <div>
                        {children}
                    </div>

                </body>
            </html>
        </UserProvider>

    )
}