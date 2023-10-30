import { useEffect, useRef } from "react";
import Nav from "react-bootstrap/Nav";

const NavLinks = () => {
  const links = [
    { text: "Home", target: "#home" },
    { text: "About", target: "#about" },
    { text: "Resume", target: "#resume" },
    { text: "Services", target: "#services" },
    { text: "Skills", target: "#skills" },
    { text: "Projects", target: "#projects" },
    { text: "My Blog", target: "#blog" },
    { text: "Contact", target: "#contact" },
  ];

  // Scroll To Link Target
  const scroll2Target = (link) => {
    const targetElement = document.querySelector(link.getAttribute("data-target"));
    targetElement && scrollTo(0, targetElement.offsetTop);
  };

  const linksRef = useRef([]);

  // Add/Remove Active Class to Nav Links
  useEffect(() => {
    const isLinkActive = () => {
      linksRef.current.forEach((link) => {
        const target = document.querySelector(link.getAttribute("data-target"));
        // If:  Target === null => return
        if (!target) return;
        // Else: If Target is in view => add("active"), Else: remove("active")
        if (scrollY >= target.offsetTop - 100 && scrollY < target.offsetTop - 100 + target.offsetHeight) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", isLinkActive);
    window.addEventListener("load", isLinkActive);
  }, [linksRef]);

  return (
    <Nav className="ms-auto gap-1 gap-lg-0">
      {links.map((element, i) => (
        <Nav.Link
          className="px-lg-3 text-light"
          ref={(ref) => {
            linksRef.current[i] = ref;
          }}
          onClick={(e) => {
            !e.target.classList.contains("active") && scroll2Target(e.target);
          }}
          data-target={element.target}
          key={element.text}
        >
          <span>{element.text}</span>
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default NavLinks;
