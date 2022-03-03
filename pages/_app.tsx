import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/global.css";
import Head from "next/head";
import DefaultLayout from "../components/Layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Head>
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </div>
    </>
  );
}

export default MyApp;
