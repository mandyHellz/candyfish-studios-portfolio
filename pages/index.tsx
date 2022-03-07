import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection/AboutSection";
import FaqSection from "../components/FaqSection/FaqSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import { motion } from "framer-motion";
import { container, pageAnimation } from "../animations/animation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Candyfish Photography</title>
      </Head>

      <motion.div
        exit="exit"
        variants={container}
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
