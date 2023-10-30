import "./style.sass";
import { motion } from "framer-motion";
import LinkBtn from "../../common/linkBtn";
import Info from "./components/Info";
import ProjectsCount from "./components/ProjectsCount";
import Title from "./components/Title";

const About = () => {
  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  return (
    <section id="about" className="about">
      <motion.div className="container" initial="hidden" whileInView="visible" variants={variants}>
        <motion.div className="row g-3" variants={variants}>
          {/* Image */}
          <div className="img-container col-md-6 col-lg-5">
            <div
              className="img"
              style={{ backgroundImage: "url('/src/assets/images/about/image.png')", minHeight: "100%" }}
            ></div>
          </div>

          {/* Text */}
          <motion.div className="text col-md-6 col-lg-7 pb-md-3" variants={variants}>
            <Title />

            <Info variants={variants} />

            <ProjectsCount variants={variants} />

            <motion.div className="pb-md-5" variants={variants}>
              <LinkBtn className="fw-600">Download CV</LinkBtn>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
