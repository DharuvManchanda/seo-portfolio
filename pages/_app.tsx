import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import Topbar from "@/components/topbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Best Makeup Artist - Anjali Bhutani | Bridal & Party Makeup</title>
        <meta name="google-site-verification" content="Zvu-78XubYkeGnVEN-4iaFlCWQvq-80WTF0OcD3D5Fg" />
        <meta name="description" content="Anjali Bhutani is a professional makeup artist specializing in bridal, party, and HD makeup. Book your session today and look stunning!" />
        <meta name="keywords" content="makeup artist, bridal makeup, party makeup, HD makeup, best makeup artist, professional makeup, wedding makeup, airbrush makeup, makeup studio, makeup services" />
        <meta name="author" content="Anjali Bhutani" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Best Makeup Artist - Anjali Bhutani" />
        <meta property="og:description" content="Looking for the best bridal or party makeup? Anjali Bhutani offers professional makeup services tailored to your beauty needs." />
        <meta property="og:image" content="https://hairandmakeupbyanjali.com/anjali.jpg" />
        <meta property="og:url" content="https://hairandmakeupbyanjali.com/" />
        <meta property="og:type" content="website" />

        {/* JSON-LD Structured Data (SEO Optimization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anjali Bhutani",
              "jobTitle": "Professional Makeup Artist",
              "image": "https://hairandmakeupbyanjali.com/anjali.jpg",
              "sameAs": [
                "https://www.instagram.com/yourprofile",
                "https://www.facebook.com/yourpage",
                "https://www.linkedin.com/in/yourprofile"
              ],
              "description": "Professional makeup artist offering bridal, HD, and airbrush makeup services.",
              "url": "https://hairandmakeupbyanjali.com/"
            })
          }}
        />
      </Head>
      <div className="max-h-full">
        <Navbar />
        {/* <Topbar /> */}
        <main>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </div>
    </>
  );
}
