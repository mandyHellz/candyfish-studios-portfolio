import Card from "../Cards/Card";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <p>
          High <span>quality</span> services
        </p>
        <div className="cards">
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
      <div className="image-div">
        <img src="./img/home2.png" alt="camera" />
      </div>
    </div>
  );
};
export default ServicesSection;
