import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";

const portfolioProjects = [
  {
    id: 1,
    year: "2025",
    title: "My Portfolio Page",
    link: "",
    image: darkSaasLandingPage,
  },
  {
    id: 2,
    year: "2025",
    title: "2 Factor Authentication",
    link: "",
    image: lightSaasLandingPage,
  },
  {
    id: 3,
    year: "2025",
    title: "Landing Page",
    link: "",
    image: aiStartupLandingPage,
  },
];

const ProjectsSection = () => {
  return (
    <div className="py-20 lg:py-24 flex justify-center items-center" id="projects">
      <div className="container flex flex-col justify-center items-center">
        <p className="text-2xl text-zinc-400 font-bold lg:my-4">REAL WORLD RESULTS</p>
        <h2 className="text-xl font-extralight text-zinc-300/50 mt-5  lg:my-5">Featured Projects</h2>
        <div className="flex sm:flex-col md:flex-row justify-center items-center flex-wrap  lg:my-5">
          {portfolioProjects.map((project) => {
            return (
              <div key={project.id} className="flex flex-col border border-zinc-600 my-4 px-4 py-6 rounded-xl gap-y-4 bg-zinc-700/20 max-w-[300px] mx-4">
                <div className="flex flex-col">
                  <span className="text-zinc-500 ">{project.year}</span>
                  <h3 className="text-xl text-zinc-300">{project.title}</h3>
                </div>
                <img src={project.image} alt="project img" className="w-[100%]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
