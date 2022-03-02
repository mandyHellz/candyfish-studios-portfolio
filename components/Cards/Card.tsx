const Card = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="card basis-80">
      <div className="icon flex items-center">
        <img src={icon} alt="icons" className="h-16 w-16" />
        <div className="w-40">
          <p className="ml-4 bg-white text-black p-4">{title}</p>
        </div>
      </div>
      <p className="w-3/4 pt-8 pb-16 text-left">{description}</p>
    </div>
  );
};

export default Card;
