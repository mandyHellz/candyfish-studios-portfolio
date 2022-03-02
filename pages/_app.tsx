import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="font-Montserrat font-normal text-white">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
