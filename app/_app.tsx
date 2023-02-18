import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from "../context/userStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <UserProvider user={pageProps.user}>
        <Component {...pageProps} />
      </UserProvider>
  )
}

export default MyApp
