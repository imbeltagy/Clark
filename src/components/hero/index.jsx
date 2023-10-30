import "./style.sass";
import Carousel from "react-bootstrap/Carousel";
import LinkBtn from "../../common/linkBtn";
import { motion } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      img: "/src/assets/images/hero/bg_1.png",
      headding: (
        <>
          I'm <span className="special">Clark Thompson</span>
        </>
      ),
      subHeadding: "A Freelance Web Designer",
    },
    {
      img: "/src/assets/images/hero/bg_2.png",
      headding: (
        <>
          I'm a <span className="special">web designer</span> based in London
        </>
      ),
    },
  ];

  return (
    <section id="hero" className="hero">
      <Carousel fade interval={3000} controls={null}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.img}>
            <div className="container">
              <div className="img" style={{ backgroundImage: `url(${slide.img})` }}></div>
              <div className="overlay"></div>
              <Carousel.Caption>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
                  className="container"
                >
                  <span className="small">HELLO!</span>
                  <h1 className="my-2 mb-3">{slide.headding}</h1>
                  {slide.subHeadding && <h2 className="mb-4">{slide.subHeadding}</h2>}
                  <div className="btns">
                    <LinkBtn className="me-1">hire me</LinkBtn>
                    <LinkBtn outline>my works</LinkBtn>
                  </div>
                </motion.div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
