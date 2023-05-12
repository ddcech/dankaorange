import { type NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { EnterIcon } from '../../components/icons/EnterIcon'

const KalimeraPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kovalenko - Kalimera</title>
        <meta name="description" content="dankaorange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#000000]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Link href="/#work" className="">
            <EnterIcon style={{ transform: 'rotate(180deg)' }} />
          </Link>
          <h1 className="text-5xl font-normal text-center tracking-tight text-white sm:text-[5rem]">
            Kalimera
          </h1>
          <div style={{ display: 'grid', justifyItems: 'center', maxWidth: 1500 }}>
              <Image src="/images/kalimera/1000002196.png" alt="kali" width="1500" height="500" />
              <Image src="/images/kalimera/1000002199.png" alt="kali" width="1500" height="500" />
              <div style={{ display: 'grid', gridAutoColumns: 'minmax(0, 1fr)', gridAutoFlow: 'column' }}>
                <Image src="/images/kalimera/1000002197.png" alt="kali" width="1500" height="500" />
                <Image src="/images/kalimera/1000002198.png" alt="kali" width="1500" height="500" />
              </div>
              <div style={{ display: 'grid', gridAutoColumns: 'minmax(0, 1fr)', gridAutoFlow: 'column' }}>
                <Image src="/images/kalimera/1000002195.png" alt="kali" width="1500" height="500" />
                <Image src="/images/kalimera/1000002194.png" alt="kali" width="1500" height="500" />
              </div>
              <Image src="/images/kalimera/1000002193.png" alt="kali" width="1500" height="500" />
              <Image src="/images/kalimera/1000002192.png" alt="kali" width="1500" height="500" />
          </div>
        </div>
      </main>
    </>
  )
}

export default KalimeraPage
