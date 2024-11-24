import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
        <title>Anjali Bhutani</title>
      </Head>

    <div className="max-h-full">
        <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  </>
    )
    ;
}
