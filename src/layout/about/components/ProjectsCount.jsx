import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProjectsCount = ({ variants }) => {
  // Increase the count into 120 for Projects Complete Text
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      projectsCount < 120 && setProjectsCount((prev) => ++prev);
    }, 25);
  }, [projectsCount]);

  return (
    <motion.p
      className="fw-600 mb-4"
      style={{ fontSize: "1.3rem", letterSpacing: ".07em" }}
      initial="hidden"
      whileInView="visible"
      variants={variants}
    >
      <motion.span className="text-primary me-2" variants={variants}>
        {projectsCount}
      </motion.span>
      <motion.span className="text-light" variants={variants}>
        Projects complete
      </motion.span>
    </motion.p>
  );
};

export default ProjectsCount;
