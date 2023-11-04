import "./style.sass";
import { MotionParent, MotionChild } from "/src/common/motionDiv/Index";

const SectionTitle = ({ children, alignLeft, bgText }) => {
  return (
    <MotionParent
      className={`section-title mb-5 text-light ${alignLeft ? "text-start" : "text-center"}`}
      data-bg-text={bgText}
    >
      {children}
    </MotionParent>
  );
};

SectionTitle.Headding = ({ children }) => {
  return (
    <>
      <MotionChild.h2 className="fw-800">{children}</MotionChild.h2>
    </>
  );
};

SectionTitle.Brief = ({ children }) => {
  return <MotionChild.p className="text-secondary">{children}</MotionChild.p>;
};

export default SectionTitle;
