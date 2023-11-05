import "./style.sass";
import Carousel from "react-bootstrap/Carousel";
import LinkBtn from "/src/common/linkBtn/Index";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const slides = [
    {
      img: "/hero/bg_1.webp",
      headding: (
        <>
          I'm <span className="text-primary">Clark Thompson</span>
        </>
      ),
      subHeadding: "A Freelance Web Designer",
    },
    {
      img: "/hero/bg_2.webp",
      headding: (
        <>
          I'm a <span className="text-primary">web designer</span> based in London
        </>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="home" className="hero">
      <Carousel fade interval={3000} controls={null} activeIndex={index} onSelect={handleSelect}>
        {slides.map((slide, i) => (
          <Carousel.Item key={slide.img}>
            <div className="container">
              {/* Image */}
              <div className="img" style={{ backgroundImage: `url(${slide.img})` }}></div>
              <div className="overlay"></div>

              {/* Caption */}
              <Carousel.Caption>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ y: 0, opacity: i === index ? 1 : 0, transition: { duration: 0.7 } }}
                  className="container"
                >
                  <span className="small text-primary">HELLO!</span>
                  <h1 className="my-2 mb-3 fw-800">{slide.headding}</h1>
                  {slide.subHeadding && <h2 className="mb-4">{slide.subHeadding}</h2>}
                  <div className="btns d-flex justify-content-center justify-content-lg-start">
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
