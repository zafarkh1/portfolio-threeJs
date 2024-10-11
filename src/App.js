import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Showcase from "./sections/Showcase";

function App(props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Showcase />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
