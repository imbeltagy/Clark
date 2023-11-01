import "./style.sass";
import { MotionChild } from "/src/common/motionDiv";

const SectionTitle = ({ children, alignLeft, bgText }) => {
  return (
    <MotionChild
      className={`section-title mb-5 text-light ${alignLeft ? "text-start" : "text-center"}`}
      data-bg-text={bgText}
    >
      {children}
    </MotionChild>
  );
};

SectionTitle.Headding = ({ children }) => {
  return (
    <>
      <h2 className="fw-800">{children}</h2>
    </>
  );
};

SectionTitle.Brief = ({ children }) => {
  return <p className="text-secondary">{children}</p>;
};

export default SectionTitle;
