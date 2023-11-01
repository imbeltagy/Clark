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

export const MotionSpan = ({ children, ...props }) => {
  return (
    <motion.span {...props} variants={variants}>
      {children}
    </motion.span>
  );
};

export default MotionDiv;
