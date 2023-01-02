import { Raleway, Inter } from "@next/font/google";
// const raleway = Raleway({
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   variable: '--font-raleway',

// })

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-inter',
})

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-raleway',
})

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${raleway.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
