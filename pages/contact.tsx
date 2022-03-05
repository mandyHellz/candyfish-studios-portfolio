import { motion } from "framer-motion";
import Head from "next/head";
import { pageAnimation } from "../animations/animation";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="question max-w-menu px-5 py-10 mx-auto"
      >
        <p className="cursor-pointer py-8 text-2xl font-bold">Contact us</p>
      </motion.div>
    </>
  );
};

export default ContactUs;
