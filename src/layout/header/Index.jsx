import "./style.sass";
import "./fixedNavbar";
import "./activeLinks";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
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

  return (
    <Navbar expand="lg">
      <div className="container py-2">
        <Navbar.Brand href="#home" className="text-light fw-900">
          CLARK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navigation" />
        <Navbar.Collapse id="navigation">
          <Nav className="ms-auto gap-1 gap-lg-0">
            {links.map((element) => (
              <Nav.Link
                className="px-lg-3 text-light"
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
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
