import "./app.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./layout/hero";
import Header from "./layout/header";
import About from "./layout/about";
import Resume from "./layout/resume";
import Services from "./layout/services";
import Skills from "./layout/skills";
import Projects from "./layout/projects";

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
    </>
  );
}

export default App;
