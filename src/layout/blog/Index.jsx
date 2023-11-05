import SectionTitle from "/src/common/sectionTitle/Index";
import { MotionParent, MotionChild } from "/src/common/MotionDiv/Index";

const Blog = () => {
  const images = ["/blog/image_1.webp", "/blog/image_2.webp", "/blog/image_3.webp"];

  return (
    <section id="blog" className="blog">
      <MotionParent className="container">
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
                aria-label="Open the project on new window"
                style={{
                  display: "block",
                  backgroundImage: `url('${element}')`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  height: "20rem",
                }}
              ></a>
              {/* Text */}
              <p className="mt-2" style={{ letterSpacing: ".1em", fontSize: ".8rem" }}>
                <span className="text-primary d-inline-block">JUNE 21, 2019</span>
                <a className="text-primary text-decoration-none d-inline-block mx-3" href="#">
                  ADMIN
                </a>
                <a className="text-primary text-decoration-none d-inline-block" href="#">
                  <svg height="1em" viewBox="0 0 512 512" className="fill-primary d-inline-block me-1">
                    <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                  </svg>
                  3
                </a>
              </p>
              {/* Title */}
              <a
                className="title text-light text_hover-primary fw-500 text-decoration-none"
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
      </MotionParent>
    </section>
  );
};

export default Blog;
