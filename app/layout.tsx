import '../styles/globals.css'
import Header from "./Header"

export default function RouteLayout({ 
    children, 
}: { 
    children: React.ReactNode 
}) {
    return (
        <html>
            <head></head>
            <body>
                <Header/>
                {children}
            </body>
        </html>
  )
}