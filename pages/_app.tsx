import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>
          {`
              body {
                margin: 0px;
                padding: 0;
                box-sizing: border-box;
              }
            `}
        </style>
      </Head>
      <div className="font-Montserrat font-light text-gray-800">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
