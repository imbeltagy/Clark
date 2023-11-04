import "./style.sass";
import { MotionChild } from "/src/common/motionDiv/Index";

const LinkBtn = ({ children, outline, className }) => {
  return (
    <MotionChild.a
      href="#"
      className={`btn btn${
        outline ? "-outline" : ""
      }-primary rounded-pill py-3 px-4 text-uppercase fw-500 ${className}`}
    >
      {children}
    </MotionChild.a>
  );
};

export default LinkBtn;
