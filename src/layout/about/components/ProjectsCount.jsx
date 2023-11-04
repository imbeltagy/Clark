import { useState, useEffect } from "react";
import { MotionSpan } from "/src/common/motionDiv/Index";

const ProjectsCount = () => {
  // Increase the count into 120 for Projects Complete Text
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      projectsCount < 120 && setProjectsCount((prev) => ++prev);
    }, 25);
  }, [projectsCount]);

  return (
    <p className="mb-4" style={{ fontSize: "1.3rem" }}>
      <MotionSpan className="text-primary d-inline-block me-2 fw-600">{projectsCount}</MotionSpan>
      <MotionSpan className="text-light d-inline-block">Projects complete</MotionSpan>
    </p>
  );
};

export default ProjectsCount;
