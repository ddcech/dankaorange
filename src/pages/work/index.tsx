import { type NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

const WorkPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kovalenko - Work</title>
        <meta name="description" content="dankaorange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FF8221] to-[#8E4913]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Work
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link href="/work/nftliithos">
              <h3 className="text-2xl font-bold text-white">NFT Liithos →</h3>
              <div className="relative max-w-xs overflow-hidden rounded-xl bg-cover bg-no-repeat">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="Louvre"
                />
              </div>
            </Link>
            <Link href="/work/kalimera">
              <h3 className="text-2xl font-bold text-white">Kalimera →</h3>
              <div className="relative max-w-xs overflow-hidden rounded-xl bg-cover bg-no-repeat">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="Louvre"
                />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default WorkPage
