import "./style.sass";
import LinkBtn from "/src/common/linkBtn";
import Info from "./components/Info";
import ProjectsCount from "./components/ProjectsCount";
import Title from "./components/Title";
import MotionDiv, { MotionChild } from "/src/common/motionDiv";

const About = () => {
  return (
    <section id="about" className="about">
      <MotionDiv className="container">
        <MotionChild className="row g-3">
          {/* Image */}
          <div className="img-container col-md-6 col-lg-5">
            <div
              className="img"
              style={{ backgroundImage: "url('/src/assets/images/about/image.png')", minHeight: "100%" }}
            ></div>
          </div>

          {/* Text */}
          <div className="text col-md-6 col-lg-7 pb-md-3">
            <Title />

            <Info />

            <ProjectsCount />

            <MotionChild className="pb-md-5">
              <LinkBtn className="fw-600">Download CV</LinkBtn>
            </MotionChild>
          </div>
        </MotionChild>
      </MotionDiv>
    </section>
  );
};

export default About;
