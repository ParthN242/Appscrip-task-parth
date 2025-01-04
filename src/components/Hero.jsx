import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <div className="breadcrumb">
          <p className="breadcrumb_item">HOME</p>
          <p className="breadcrumb_line"></p>
          <p className="breadcrumb_item active">SHOP</p>
        </div>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </section>
  );
};

export default Hero;
