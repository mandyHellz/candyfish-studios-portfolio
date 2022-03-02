import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection/AboutSection";
import FaqSection from "../components/FaqSection/FaqSection";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import ServicesSection from "../components/ServicesSection/ServicesSection";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Candyfish Studios</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <>
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </>
    </DefaultLayout>
  );
};

export default Home;
