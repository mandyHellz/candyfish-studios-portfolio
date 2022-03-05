import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Data from "../../data/data";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations/animation";

const MovieDetail = () => {
  if (typeof window === "undefined") return <></>;
  const router = useRouter();
  const { id } = router.query;
  const url = window.location.pathname;
  const [movies, setMovies] = useState(Data());
  const [movie, setMovie] = useState(movies[0]);

  useEffect(() => {
    const current = movies.filter((movie: { url: string }) => movie.url == url);
    setMovie(current[0]);
  }, [movies]);

  return (
    <>
      <Head>
        <title>Our Works:{movie.title}</title>
      </Head>

      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="details text-white mx-auto px-5 py-10"
      >
        <div className="headline min-h-90vh pt-40 relative">
          <p className="headline-title text-4xl sm:text-5xl text-center mx-auto xl:text-left">
            {movie.title}
          </p>
          <p className="text-xl w-full xl:w-2/3 text-center py-10 mx-auto">
            {movie?.description}
          </p>
          <img
            src={movie?.mainImg}
            alt="movie"
            className="w-full h-70vh object-cover"
          />
        </div>
        <div className="awards max-w-container mx-auto min-h-80vh flex flex-col xl:flex-row gap-20 text-center xl:text-left items-center justify-around">
          {movie?.awards.map((award) => (
            <div className="award flex flex-col gap-4 xl:gap-8" key={award.id}>
              <h3 className="text-xl">{award.title}</h3>
              <div className="line h-1 bg-green-600"></div>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
        <div className="imageDisplay">
          <img
            src={movie?.secondaryImg}
            alt="movie"
            className="w-full h-70vh object-cover"
          />
        </div>
      </motion.div>
    </>
  );
};
export default MovieDetail;
