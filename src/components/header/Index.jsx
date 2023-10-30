import "./style.sass";
import "./fixedNavbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const links = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "#resume" },
    { text: "Services", href: "#services" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "My Blog", href: "#blog" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <div className="container py-2">
        <Navbar.Brand href="#home">CLARK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navigation" />
        <Navbar.Collapse id="navigation">
          <Nav className="ms-auto gap-1 gap-lg-0">
            {links.map((element) => (
              <Nav.Link className="px-lg-3" href={element.href} key={element.text}>
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
