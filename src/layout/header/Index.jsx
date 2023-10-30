import "./style.sass";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useRef } from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const header = useRef();

  // Change Header To Fixed On Scroll
  useEffect(() => {
    const fixedNavbar = () => {
      if (scrollY >= 300) {
        // Added all Classes in case its onload and there is no classes
        header.current.classList.add("awake");
        header.current.classList.add("fixed");
        header.current.classList.add("sleep");
      } else if (scrollY >= 200) {
        header.current.classList.add("fixed");
        header.current.classList.add("sleep");
        header.current.classList.remove("awake");
      } else if (scrollY >= 100) {
        header.current.classList.add("sleep");
        header.current.classList.remove("fixed");
      } else {
        header.current.classList.remove("sleep");
      }
    };

    window.addEventListener("scroll", fixedNavbar);
    window.addEventListener("load", fixedNavbar);
  }, [header]);

  return (
    <Navbar ref={header} expand="lg">
      <div className="container py-2">
        <Navbar.Brand href="#home" className="text-light fw-900">
          CLARK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navigation" />
        <Navbar.Collapse id="navigation">
          <NavLinks />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
