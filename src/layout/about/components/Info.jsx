import { motion } from "framer-motion";

const Info = ({ variants }) => {
  const info = [
    { name: "Name", content: "Clark Thompson" },
    { name: "Date of birth", content: "January 01, 1987" },
    { name: "Address", content: "San Francisco CA 97987 USA" },
    { name: "Zip code", content: "1000" },
    { name: "Email", content: "clarkthomp@gmail.com" },
    { name: "Phone", content: "+1-2234-5678-9-0" },
  ];

  return (
    <div className="info my-5 ps-2">
      {info.map((element) => (
        <motion.div className="row mb-3" variants={variants} key={element.name}>
          <span className="col-3 text-white fw-600">{element.name}:</span>
          <span className="col-9 text-secondary">{element.content}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
