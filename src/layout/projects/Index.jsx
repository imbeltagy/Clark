import "./style.sass";
import SectionTitle from "/src/common/sectionTitle/Index";
import { MotionParent } from "/src/common/motionDiv/Index";

const Projects = () => {
  const images = [
    { src: "/projects/project-4.webp", cols: 4 },
    { src: "/projects/project-5.webp", cols: 8 },
    { src: "/projects/project-1.webp", cols: 8 },
    { src: "/projects/project-2.webp", cols: 4 },
    { src: "/projects/project-6.webp", cols: 8 },
    { src: "/projects/project-3.webp", cols: 4 },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        {/* Headding */}
        <SectionTitle bgText="Projects">
          <SectionTitle.Headding>Our Projects</SectionTitle.Headding>
          <SectionTitle.Brief>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </SectionTitle.Brief>
        </SectionTitle>

        {/* Content */}
        <div className="row g-4">
          {images.map((element) => (
            <div className={`wrapper col-md-${element.cols}`} key={element.src}>
              <MotionParent className="project">
                <div className="img" style={{ backgroundImage: `url('${element.src}')` }}></div>
                <div className="text">
                  <a
                    className="text-light d-block mb-3"
                    style={{ fontSize: "1.25rem", textDecoration: "none" }}
                    href="#"
                  >
                    Branding & Illustration Design
                  </a>
                  <h3 className="text-light" style={{ opacity: 0.8, fontSize: ".85rem", letterSpacing: ".05em" }}>
                    WEB DESIGN
                  </h3>
                </div>
              </MotionParent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
