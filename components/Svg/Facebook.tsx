import { motion } from "framer-motion";

const Facebook = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`Facebook ${className}`}
      viewBox="0 0 95 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 46.7596C0 69.8779 17.1515 89.1017 39.5833 93V59.4154H27.7083V46.5H39.5833V36.1654C39.5833 24.5404 47.2348 18.0846 58.0569 18.0846C61.4848 18.0846 65.1819 18.6 68.6098 19.1154V31H62.5417C56.7348 31 55.4167 33.8404 55.4167 37.4596V46.5H68.0833L65.9735 59.4154H55.4167V93C77.8485 89.1017 95 69.8818 95 46.7596C95 21.0413 73.625 0 47.5 0C21.375 0 0 21.0413 0 46.7596Z"
        fill="url(#paint0_linear_1_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_2"
          x1="0"
          y1="0"
          x2="92.979"
          y2="94.9785"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#43CBFF" />
          <stop offset="1" stop-color="#9708CC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Facebook;
