import Head from "next/head";
import SinglePortfolio from "../../components/Work/SinglePortfolio";
import { motion } from "framer-motion";
import {
  pageAnimation,
  slider,
  sliderContainer,
} from "../../animations/animation";

const OurWork = () => {
  return (
    <>
      <Head>
        <title>Our work</title>
      </Head>

      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        style={{ background: "#fff" }}
        className="work min-h-100vh overflow-hidden pt-40 lg:pt-32 pb-20 text-gray-800"
      >
        <motion.div variants={sliderContainer}>
          <motion.div variants={slider} className="frame-1"></motion.div>
          <motion.div variants={slider} className="frame-2"></motion.div>
          <motion.div variants={slider} className="frame-3"></motion.div>
          <motion.div variants={slider} className="frame-4"></motion.div>
        </motion.div>

        <div className="movies flex flex-col gap-20 xl:gap-40 max-w-menu px-5 py-10 mx-auto">
          <div>
            <SinglePortfolio
              workTitle="The Athlete"
              workImage="./img/athlete-small.png"
              linkTo="/work/the-athlete"
            />
          </div>
          <div>
            <SinglePortfolio
              workTitle="The Racer"
              workImage="./img/theracer-small.png"
              linkTo="/work/the-racer"
            />
          </div>
          <div>
            <SinglePortfolio
              workTitle="The Goodtimes"
              workImage="./img/goodtimes-small.png"
              linkTo="/work/good-times"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OurWork;
