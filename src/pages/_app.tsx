// import localFont from '@next/font/local'
import { type AppType } from "next/dist/shared/lib/utils"

import "../styles/globals.css"
import './main.css'

// const PPAgrandir = localFont({ src: '../styles/fonts/PPAgrandir-Variable.ttf' }) as any

const MyApp: AppType = ({ Component, pageProps }) => {
  return <main><Component  {...pageProps} /></main>
}

export default MyApp
