import SectionTitle from "/src/common/SectionTitle/Index";
import { MotionParent, MotionChild } from "/src/common/motionDiv/Index";
import { motion } from "framer-motion";

const Skills = () => {
  const progresses = [
    { name: "Photoshop", progress: 90 },
    { name: "jQuery", progress: 85 },
    { name: "HTML5", progress: 95 },
    { name: "CSS3", progress: 90 },
    { name: "WordPress", progress: 70 },
    { name: "SEO", progress: 80 },
  ];

  return (
    <section id="skills" className="skills">
      <MotionParent className="container">
        {/* Headding */}
        <SectionTitle bgText="Skills">
          <SectionTitle.Headding>My Skills</SectionTitle.Headding>
          <SectionTitle.Brief>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </SectionTitle.Brief>
        </SectionTitle>

        {/* Content */}
        <MotionChild className="row row-cols-md-2">
          {progresses.map((element, i) => (
            <div className="wrapper mb-4 pb-2" key={element.name}>
              {/* Text */}
              <div className="text text-light mb-2 d-flex justify-content-between align-items-center">
                {/* Title */}
                <h3 id={`progress-${element.name}`} className="fw-500" style={{ fontSize: "1.25rem" }}>
                  {element.name}
                </h3>

                {/* Percent */}
                <span className="d-block" style={{ fontSize: "1.25rem", paddingRight: `${100 - element.progress}%` }}>
                  {element.progress}%
                </span>
              </div>

              {/* Progress Bar */}
              <div class="progress" style={{ backgroundColor: "#1a1a1a", height: ".7rem" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${element.progress}%`,
                    transition: { duration: element.progress / 100, delay: 0.4 },
                  }}
                  viewport={{ once: true }}
                  class="progress-bar"
                  role="progressbar"
                  aria-labelledby={`progress-${element.name}`}
                  style={{ backgroundColor: "#ffbd39", borderRadius: ".2em" }}
                  aria-valuenow={element.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></motion.div>
              </div>
            </div>
          ))}
        </MotionChild>
      </MotionParent>
    </section>
  );
};

export default Skills;
