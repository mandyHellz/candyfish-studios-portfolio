import { motion } from "framer-motion";
import Link from "next/link";
import {
  fade,
  lineAnimation,
  photoAnimation,
} from "../../animations/animation";

const SinglePortfolio = ({
  workTitle,
  workImage,
  linkTo,
}: {
  workTitle: string;
  workImage: string;
  linkTo: string;
}) => {
  return (
    <div className="portfolio flex flex-col gap-12">
      <motion.p variants={fade} className="text-5xl leading-none">
        {workTitle}
      </motion.p>
      <motion.div
        variants={lineAnimation}
        className="line h-1 bg-bg-violet-400"
      ></motion.div>
      <Link href={linkTo}>
        <motion.img
          variants={photoAnimation}
          src={workImage}
          alt="athlete"
          className="w-100 h-70vh object-cover"
        />
      </Link>
    </div>
  );
};

export default SinglePortfolio;
