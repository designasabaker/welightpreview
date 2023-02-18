"use client"

import '../styles/globals.css'
import Navbar from '../components/Navbar'

export default function RouteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
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
    )
}