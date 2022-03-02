const AboutSection = () => {
  return (
    <div className="about min-w-xs min-h-90vh xl:flex items-center justify-between py-20 xl:py-40">
      <div className="description xl:flex-1 pb-12 xl:pb-0 xl:pr-20 text-center xl:text-left">
        <div className="title overflow-hidden leading-none text-4xl md:text-6xl">
          <h2>We work to make</h2>
          <h2>
            the most <span>creative dreams</span>
          </h2>
          <h2>becomes possible.</h2>
        </div>
        <p className="text-xl md:text-xl text-gray-400 py-12">
          Contact us to make any animation video ideas that you have come true.
          Our team is made up of incredible and creative professionals.
        </p>
        <button className="px-3 py-4">Contact Us</button>
      </div>
      <div className="image flex-1 overflow-hidden">
        <img
          src="./img/home1.png"
          alt="worker-with-cam"
          className="object-cover w-full xl:h-80vh"
        />
      </div>
    </div>
  );
};

export default AboutSection;
