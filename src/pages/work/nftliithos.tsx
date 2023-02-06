import { type NextPage } from "next";
import Head from "next/head";

const NFTLiithosPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kovalenko - NFT Liithos</title>
        <meta name="description" content="dankaorange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FF8221] to-[#8E4913]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold text-center tracking-tight text-white sm:text-[5rem]">
            NFT Liithos
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
         
          </div>
        </div>
      </main>
    </>
  );
};

export default NFTLiithosPage
