import "./app.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./layout/hero";
import Header from "./layout/header";
import About from "./layout/about";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
}

export default App;
