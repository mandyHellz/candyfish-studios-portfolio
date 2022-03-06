import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/global.css";
import Head from "next/head";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  if (typeof window === "undefined") return <></>;
  const url = window.location.pathname;

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [url]);

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
