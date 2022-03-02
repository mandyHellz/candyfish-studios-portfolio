import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Head>
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
