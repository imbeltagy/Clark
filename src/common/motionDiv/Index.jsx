import { motion } from "framer-motion";

const variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const MotionDiv = ({ children, ...props }) => {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={variants} {...props}>
      {children}
    </motion.div>
  );
};

export const MotionChild = ({ children, ...props }) => {
  return (
    <motion.div {...props} variants={variants}>
      {children}
    </motion.div>
  );
};

MotionChild.span = ({ children, ...props }) => {
  return (
    <motion.span {...props} variants={variants}>
      {children}
    </motion.span>
  );
};
MotionChild.h2 = ({ children, ...props }) => {
  return (
    <motion.h2 {...props} variants={variants}>
      {children}
    </motion.h2>
  );
};
MotionChild.p = ({ children, ...props }) => {
  return (
    <motion.p {...props} variants={variants}>
      {children}
    </motion.p>
  );
};
MotionChild.a = ({ children, ...props }) => {
  return (
    <motion.a {...props} variants={variants}>
      {children}
    </motion.a>
  );
};
MotionChild.li = ({ children, ...props }) => {
  return (
    <motion.li {...props} variants={variants}>
      {children}
    </motion.li>
  );
};
MotionChild.input = ({ children, ...props }) => {
  return (
    <motion.input {...props} variants={variants}>
      {children}
    </motion.input>
  );
};
MotionChild.textarea = ({ children, ...props }) => {
  return (
    <motion.textarea {...props} variants={variants}>
      {children}
    </motion.textarea>
  );
};

export const MotionSpan = ({ children, ...props }) => {
  return (
    <motion.span {...props} variants={variants}>
      {children}
    </motion.span>
  );
};

export default MotionDiv;
