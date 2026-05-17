import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import Value from "./components/Value";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 text-primary-900">
        <ThemeToggle />
        <Navbar />
        <div>
          <HeroSection />
          <About />
          <Projects />
          <Experience />
          <TechnicalSkills />
          <Value />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;