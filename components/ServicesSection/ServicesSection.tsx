import Card from "../Cards/Card";

const ServicesSection = () => {
  return (
    <div className="services min-w-xs min-h-90vh flex flex-col xl:flex-row items-center justify-between py-20">
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
    </div>
  );
};
export default ServicesSection;
