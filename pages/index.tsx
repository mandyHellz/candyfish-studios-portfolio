import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Candyfish Studios</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <></>
    </DefaultLayout>
  );
};

export default Home;
