import { motion } from "framer-motion";
import {
  titleAnimation,
  fade,
  photoAnimation,
} from "../../animations/animation";
import Curves from "../Svg/Curves";

const AboutSection = () => {
  return (
    <div className="about min-h-90vh flex flex-col xl:flex-row items-center xl:justify-between pt-48 pb-20 lg:pt-32">
      <Curves className="absolute left-0 w-full z-10 hidden xl:block" />
      <div className="description z-20 xl:flex-1 pb-12 xl:pb-0 xl:pr-20 text-center xl:text-left">
        <div className="title leading-none text-3xl md:text-6xl">
          <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          <motion.h2 variants={titleAnimation}>
            the most <span>creative dreams</span>
          </motion.h2>
          <motion.h2 variants={titleAnimation}>becomes possible.</motion.h2>
        </div>
        <motion.p
          variants={fade}
          className="text-lg md:text-xl text-gray-300 py-12"
        >
          Contact us to make any animation video ideas that you have come true.
          Our team is made up of incredible and creative professionals.
        </motion.p>
        <motion.button variants={fade} className="px-3 py-4">
          Contact Us
        </motion.button>
      </div>
      <div className="image flex-1 overflow-hidden z-20">
        <motion.img
          variants={photoAnimation}
          src="./img/home1.png"
          alt="worker-with-cam"
          className="object-cover w-full xl:h-80vh"
        />
      </div>
    </div>
  );
};

export default AboutSection;
