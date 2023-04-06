"use client"

import '../styles/global.css'
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
                <head className="bg-white">
                    <title>WeLight</title>
                    <link rel="icon" href="/welight-w.ico" />
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