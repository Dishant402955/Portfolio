import Portfolio from "../assets/images/Screenshot 2025-03-23 102247.png";
import OAuth from "../assets/images/image.png";
import aiStartupLandingPage from "../assets/images/Screenshot 2025-03-23 102247.png";

const portfolioProjects = [
  {
    id: 1,
    year: "2025",
    title: "My Portfolio Page",
    link: "https://dishant.is-a.dev",
    image: Portfolio,
    source: "https://github.com/Dishant402955/portfolio",
  },
  {
    id: 2,
    year: "2025",
    title: "OAuth Template",
    link: "https://oauth-template.vercel.app/",
    image: OAuth,
    source: "https://github.com/Dishant402955/authjs-template",
  },
  {
    id: 3,
    year: "2025",
    title: "Personal Dashboard",
    link: "",
    image: aiStartupLandingPage,
    source: "https://github.com/Dishant402955/portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <div className="py-20 lg:py-24 flex justify-center items-center" id="projects">
      <div className="container flex flex-col justify-center items-center">
        <p className="text-2xl text-zinc-400 font-bold lg:my-4 select-none">REAL WORLD RESULTS</p>
        <h2 className="text-xl font-extralight text-zinc-300/50 mt-5  lg:my-5 select-none">Featured Projects</h2>
        <div className="flex sm:flex-col md:flex-row justify-center items-center flex-wrap  lg:my-5">
          {portfolioProjects.map((project) => {
            return (
              <div key={project.id} className="flex flex-col border border-zinc-600 my-4 px-4 py-6 rounded-xl gap-y-4 bg-zinc-700/20 max-w-[300px] mx-4">
                <div className="flex flex-col">
                  <span className="text-zinc-500 select-none">{project.year}</span>
                  <h3 className="text-xl text-zinc-300">{project.title}</h3>
                </div>
                <a href={project.link} target="_blank">
                  <img src={project.image} alt="project img" className=" select-none" />
                </a>
                <a href={project.source} className="w-full flex justify-center items-center" target="_blank">
                  <button className="py-2 px-4 cursor-pointer border-2 border-zinc-600/65 rounded-xl">Source Code</button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
