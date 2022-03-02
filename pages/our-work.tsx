import Head from "next/head";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import SinglePortfolio from "../components/Work/SinglePortfolio";

const OurWork = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Our work</title>
      </Head>

      <div className="work min-h-100vh overflow-hidden py-20 text-black">
        <div className="flex flex-col gap-20 xl:gap-40">
          <SinglePortfolio
            workTitle="The Athlete"
            workImage="./img/athlete-small.png"
          />
          <SinglePortfolio
            workTitle="The Racer"
            workImage="./img/theracer-small.png"
          />
          <SinglePortfolio
            workTitle="The Goodtimes"
            workImage="./img/goodtimes-small.png"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default OurWork;
