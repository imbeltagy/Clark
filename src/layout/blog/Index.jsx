import SectionTitle from "/src/common/sectionTitle";
import MotionDiv, { MotionChild } from "/src/common/MotionDiv";
import "./style.sass";

const Blog = () => {
  const images = [
    "/src/assets/images/blog/image_1.jpg",
    "/src/assets/images/blog/image_2.jpg",
    "/src/assets/images/blog/image_3.jpg",
  ];

  return (
    <section id="blog" className="blog">
      <MotionDiv className="container">
        {/* Title */}
        <SectionTitle bgText="Blog">
          <SectionTitle.Headding>Our Blog</SectionTitle.Headding>
          <SectionTitle.Brief>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </SectionTitle.Brief>
        </SectionTitle>

        {/* Content */}
        <div className="row row-cols-md-3">
          {images.map((element) => (
            <MotionChild key={element}>
              {/* Image */}
              <a
                href="#"
                style={{
                  display: "block",
                  backgroundImage: `url('${element}')`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  height: "20rem",
                }}
              ></a>
              {/* Text */}
              <p className="text-primary mt-2" style={{ letterSpacing: ".1em", fontSize: ".8rem" }}>
                <span className="d-inline-block">JUNE 21, 2019</span>
                <span className="d-inline-block mx-2" href="#">
                  ADMIN
                </span>
                <span className="d-inline-block" href="#">
                  C 3
                </span>
              </p>
              {/* Title */}
              <a
                className="title text-light fw-600 text-decoration-none"
                href="#"
                style={{ fontSize: "1.3rem", lineHeight: 1.3 }}
              >
                Why Lead Generation is Key for Business Growth
              </a>
              {/* Brief */}
              <p className="text-secondary mt-3">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
            </MotionChild>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
};

export default Blog;
