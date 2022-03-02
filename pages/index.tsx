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
      </Head>

      <div>
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </div>
    </DefaultLayout>
  );
};

export default Home;
