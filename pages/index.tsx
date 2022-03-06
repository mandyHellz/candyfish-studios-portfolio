import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection/AboutSection";
import FaqSection from "../components/FaqSection/FaqSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/animation";
import { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Candyfish Studios</title>
      </Head>

      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="max-w-menu px-5 mx-auto overflow-hidden"
      >
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </motion.div>
    </>
  );
};

export default Home;
