import { useRouter } from "next/dist/client/router";
import { NextPageContext } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Data from "../../data/data";

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movies, setMovies] = useState(Data());
  const [movie, setMovie] = useState(movies[0]);

  useEffect(() => {
    const current = movies.filter(
      (movie: { url: string }) => movie.url == window.location.pathname
    );
    setMovie(current[0]);
  }, [movies]);

  return (
    <>
      <Head>
        <title>Our Works:{movie.title}</title>
      </Head>

      <div className="details text-white">
        <div className="headline min-h-90vh pt-40 relative">
          <p className="headline-title text-5xl">{movie.title}</p>
          <img
            src={movie.mainImg}
            alt="movie"
            className="w-full h-70vh object-cover"
          />
        </div>
        <div className="awards max-w-container min-h-80vh flex flex-col xl:flex-row gap-20 items-center justify-around">
          {movie.awards.map((award) => (
            <div className="award flex flex-col gap-4 xl:gap-8" key={award.id}>
              <h3 className="text-xl">{award.title}</h3>
              <div className="line h-1 bg-green-600"></div>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
        <div className="imageDisplay">
          <img src={movie.secondaryImg} alt="movie" />
        </div>
      </div>
    </>
  );
};
export default MovieDetail;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context: NextPageContext) {
  // @ts-ignore
  const product = Data(context.params.id);
  return {
    props: {
      // @ts-ignore
      skuSlug: context.params.id,
      product,
    },
    revalidate: 36000,
  };
}
