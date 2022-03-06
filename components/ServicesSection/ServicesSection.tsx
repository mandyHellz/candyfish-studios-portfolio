import { motion } from "framer-motion";
import Card from "../Cards/Card";
import { scrollReveal } from "../../animations/animation";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useScroll } from "../../hooks/useScroll";

const ServicesSection = () => {
  // const [element, controls] = useScroll();
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });

  view ? controls.start("show") : controls.start("hidden");

  return (
    <motion.div
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="services min-h-90vh flex flex-col xl:flex-row items-center justify-between py-20"
    >
      <div className="description flex-1 pb-12 xl:pb-0 xl:pr-20">
        <h2 className="pb-20 overflow-hidden leading-none text-4xl md:text-6xl text-center xl:text-left">
          High <span>quality</span> services
        </h2>
        <div className="cards flex flex-col xl:flex-row gap-8 items-center justify-center xl:justify-start xl:flex-wrap">
          <Card
            icon="../img/clock.svg"
            title="Efficient"
            description="Lorem ipsum dolor sit amet."
          />
          <Card
            icon="../img/diaphragm.svg"
            title="Diaphgram"
            description="Lorem ipsum dolor sit amet."
          />
          <Card
            icon="../img/money.svg"
            title="Affordable"
            description="Lorem ipsum dolor sit amet."
          />
          <Card
            icon="../img/teamwork.svg"
            title="Teamwork"
            description="Lorem ipsum dolor sit amet."
          />
        </div>
      </div>
      <div className="image flex-1 overflow-hidden">
        <img
          src="./img/home2.png"
          alt="camera"
          className="object-cover w-full xl:h-80vh"
        />
      </div>
    </motion.div>
  );
};
export default ServicesSection;
