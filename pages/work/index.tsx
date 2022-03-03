import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import SinglePortfolio from "../../components/Work/SinglePortfolio";
import MovieDetail from "./[id]";

const OurWork = () => {
  return (
    <>
      <Head>
        <title>Our work</title>
      </Head>

      <div className="work min-h-100vh overflow-hidden py-20 text-black">
        <div className="flex flex-col gap-20 xl:gap-40">
          <SinglePortfolio
            workTitle="The Athlete"
            workImage="./img/athlete-small.png"
            linkTo="/work/the-athlete"
          />
          <SinglePortfolio
            workTitle="The Racer"
            workImage="./img/theracer-small.png"
            linkTo="/work/the-racer"
          />
          <SinglePortfolio
            workTitle="The Goodtimes"
            workImage="./img/goodtimes-small.png"
            linkTo="/work/good-times"
          />
        </div>
      </div>
    </>
  );
};

export default OurWork;
