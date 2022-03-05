import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/global.css";
import Head from "next/head";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <div>
        <Head>
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <DefaultLayout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </DefaultLayout>
      </div>
    </>
  );
}

export default MyApp;
