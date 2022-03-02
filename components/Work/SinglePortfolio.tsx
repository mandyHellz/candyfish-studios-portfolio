import Link from "next/link";

const SinglePortfolio = ({
  workTitle,
  workImage,
}: {
  workTitle: string;
  workImage: string;
}) => {
  return (
    <div className="portfolio flex flex-col gap-12">
      <p className="text-5xl leading-none">{workTitle}</p>
      <div className="line h-1 bg-green-600"></div>
      <Link href="#">
        <img
          src={workImage}
          alt="athlete"
          className="w-100 h-70vh object-cover"
        />
      </Link>
    </div>
  );
};

export default SinglePortfolio;
