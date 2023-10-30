import "./style.sass";

const LinkBtn = ({ children, outline, className }) => {
  return (
    <a
      href="#"
      className={`btn btn${outline ? "-outline" : ""}-primary rounded-pill py-3 px-4 text-uppercase ${className}`}
    >
      {children}
    </a>
  );
};

export default LinkBtn;
