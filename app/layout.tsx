import '../styles/globals.css'
import Header from "./Header"

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
                <Header />
                <div className='px-10 flex'>
                    {children}
                </div>

            </body>
        </html>
    )
}