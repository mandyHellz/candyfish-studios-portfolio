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
    <div className="card">
      <div className="icon">
        <img src={icon} alt="icons" />
        <p>{title}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
