import "./app.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/hero";
import Header from "./components/header";
import About from "./components/about";

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
