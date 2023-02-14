import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { EnterIcon } from "../../components/icons/EnterIcon";

const NFTLiithosPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kovalenko - NFT Liithos</title>
        <meta name="description" content="dankaorange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FF8221] to-[#FF8221]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
          <Link href="/" className="">
            <EnterIcon style={{ transform: 'rotate(180deg)' }} />
          </Link>
          <h1 className="text-5xl font-normal text-center tracking-tight sm:text-[5rem]">
            NFT Liithos
          </h1>
          <p>
            This product is under NDA. Please contact me for more information.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
         
          </div>
        </div>
      </main>
    </>
  );
};

export default NFTLiithosPage
