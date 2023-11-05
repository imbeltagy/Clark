import "./app.sass";
import "./assets/poppins.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./layout/hero/Index";
import Header from "./layout/header/Index";
import About from "./layout/about/Index";
import Resume from "./layout/resume/Index";
import Services from "./layout/services/Index";
import Skills from "./layout/skills/Index";
import Projects from "./layout/projects/Index";
import Blog from "./layout/blog/Index";
import Achievement from "./layout/achievement/Index";
import Contact from "./layout/contact/Index";
import Footer from "./layout/footer/Index";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Blog />
      <Achievement />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
