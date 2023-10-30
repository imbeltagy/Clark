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
        <Navbar.Toggle aria-controls="navigation">
          <svg viewBox="0 0 40 30" width="20" height="15" className="d-inline-block me-1">
            <path d="M 1 1 L 39 1" strokeWidth="2" strokeLinecap="round" />
            <path d="M 1 15 L 39 15" strokeWidth="2" strokeLinecap="round" />
            <path d="M 1 29 L 39 29" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-secondary">MENU</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navigation">
          <NavLinks />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
