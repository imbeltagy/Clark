import "./style.sass";
import LinkBtn from "/src/common/linkBtn/Index";
import Info from "./components/Info";
import ProjectsCount from "./components/ProjectsCount";
import Title from "./components/Title";
import { MotionParent } from "/src/common/motionDiv/Index";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <MotionParent className="row g-3">
          {/* Image */}
          <div className="img-container col-md-6 col-lg-5">
            <div className="img" style={{ backgroundImage: "url('/about/image.webp')", minHeight: "100%" }}></div>
          </div>

          {/* Text */}
          <div className="text col-md-6 col-lg-7 pb-md-3">
            <Title />

            <Info />

            <ProjectsCount />

            <LinkBtn>Download CV</LinkBtn>
          </div>
        </MotionParent>
      </div>
    </section>
  );
};

export default About;
