import AboutSection from "./components/About";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ProjectsSection from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
