import localFont from '@next/font/local'
import { type AppType } from "next/dist/shared/lib/utils"

import "../styles/globals.css"

const PPAgrandir = localFont({ src: '../styles/fonts/PPAgrandir-Variable.ttf' })

const MyApp: AppType = ({ Component, pageProps }) => {
  return <main className={PPAgrandir.className}><Component  {...pageProps} /></main>
}

export default MyApp
