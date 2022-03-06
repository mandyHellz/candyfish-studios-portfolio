import { motion } from "framer-motion";
import Head from "next/head";
import {
  pageAnimation,
  titleAnimation,
  titleAnimationScale,
  titleContainer,
} from "../animations/animation";
import Facebook from "../components/Svg/Facebook";
import Instagram from "../components/Svg/Instagram";
import Linkedin from "../components/Svg/Linkedin";
import Twitter from "../components/Svg/Twitter";

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
        className="question max-w-menu h-screen px-5 py-48 mx-auto"
      >
        <motion.p
          variants={titleAnimation}
          className="font-bold text-center lg:text-left overflow-hidden text-4xl md:text-6xl"
        >
          Get in touch.
        </motion.p>
        <motion.div
          variants={titleContainer}
          className="social pt-20 xl:pt-32 overflow-hidden flex flex-col lg:flex-row lg:justify-around lg:items-center gap-12"
        >
          <motion.div
            variants={titleAnimationScale}
            className="instagram flex lg:flex-col items-center gap-2 cursor-pointer"
          >
            <Twitter className="h-16 w-16" />
            <p>Follow us on Twitter</p>
          </motion.div>
          <motion.div
            variants={titleAnimationScale}
            className="instagram flex lg:flex-col items-center gap-2 cursor-pointer"
          >
            <Instagram className="h-16 w-16" />
            <p>Follow us on Instagram</p>
          </motion.div>
          <motion.div
            variants={titleAnimationScale}
            className="facebook flex lg:flex-col items-center gap-2 cursor-pointer"
          >
            <Facebook className="h-16 w-16" />
            <p>Follow us on Facebook</p>
          </motion.div>
          <motion.div
            variants={titleAnimationScale}
            className="linkedin flex lg:flex-col items-center gap-2 cursor-pointer"
          >
            <Linkedin className="h-16 w-16" />
            <p>Follow us on Linkedin</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactUs;
