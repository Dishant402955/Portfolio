const Projects = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-16 mb-40 pt-20"
      id="projects"
    >
      <h1 className="text-2xl">PROJECTS</h1>
      <div className="project-cards grid grid-cols-3 max-[1180px]:grid-cols-2 max-[750px]:grid-cols-1 justify-center items-center gap-4 mt-10">
        <div className="project-card flex flex-col justify-center items-center max-w-[350px] px-2 py-6 bg-zinc-900 rounded-2xl max-[1000px]:max-w-[250px] max-[1000px]:text-sm max-[1000px]:py-4">
          <figure>
            <img
              src="/src/assets/projects/project.png"
              alt="project"
              width={298}
              height={200}
            />
          </figure>
          <div className="description flex flex-col justify-center my-4 mx-2 gap-4">
            <h1 className="text-xl max-[1000px]:text-md">Portfolio</h1>
            <p className="text-sm max-[1000px]:text-xs">
              This is my first big project in React.js to solidify my React.js
              knowledge
            </p>
            <div className="tools flex justify-around items-center flex-wrap gap-y-3">
              <span className="tool py-2 px-4 bg-zinc-950 rounded-2xl max-[1000px]:text-xs max-[1000px]:px-3">
                React
              </span>
              <span className="tool py-2 px-4 bg-zinc-950 rounded-2xl max-[1000px]:text-xs max-[1000px]:px-3">
                Node
              </span>
            </div>
          </div>
          <div className="buttons flex justify-center items-center gap-x-5">
            <button className="demo px-5 py-2 ring-1 rounded-xl hover:ring-2 hover:ring-zinc-600 cursor-not-allowed max-[1000px]:text-sm max-[1000px]:px-3">
              Demo
            </button>
            <button className="source px-5 py-2 ring-1 rounded-xl hover:ring-2 hover:ring-zinc-600 cursor-not-allowed max-[1000px]:text-sm max-[1000px]:px-3">
              Source
            </button>
          </div>
        </div>
        <div className="project-card flex flex-col justify-center items-center max-w-[350px] px-2 py-6 bg-zinc-900 rounded-2xl max-[1000px]:max-w-[250px] max-[1000px]:text-sm max-[1000px]:py-4">
          <figure>
            <img
              src="/src/assets/projects/project.png"
              alt="project"
              width={298}
              height={200}
            />
          </figure>
          <div className="description flex flex-col justify-center my-4 mx-2 gap-4">
            <h1 className="text-xl max-[1000px]:text-md">
              Authentication System
            </h1>
            <p className="text-sm max-[1000px]:text-xs">
              I have built this project to solidify my Express.js knowledge
            </p>
            <div className="tools flex justify-around items-center flex-wrap gap-y-3">
              <span className="tool py-2 px-4 bg-zinc-950 rounded-2xl max-[1000px]:text-xs max-[1000px]:px-3">
                Express
              </span>
              <span className="tool py-2 px-4 bg-zinc-950 rounded-2xl max-[1000px]:text-xs max-[1000px]:px-3">
                Node
              </span>
            </div>
          </div>
          <div className="buttons flex justify-center items-center gap-x-5">
            <button className="demo px-5 py-2 ring-1 rounded-xl hover:ring-2 hover:ring-zinc-600 cursor-not-allowed max-[1000px]:text-sm max-[1000px]:px-3 ">
              Demo
            </button>
            <button className="source px-5 py-2 ring-1 rounded-xl hover:ring-2 hover:ring-zinc-600 cursor-not-allowed max-[1000px]:text-sm max-[1000px]:px-3">
              Source
            </button>
          </div>
        </div>
        <div className="project-card flex flex-col justify-center items-center max-w-[350px] px-2 py-6 bg-zinc-900 rounded-2xl max-[1000px]:max-w-[250px] max-[1000px]:text-sm max-[1000px]:py-4">
          <figure>
            <img
              src="/src/assets/projects/project.png"
              alt="project"
              width={298}
              height={200}
            />
          </figure>
          <div className="description flex flex-col justify-center my-4 mx-2 gap-4">
            <h1 className="text-xl max-[1000px]:text-md">Movie App</h1>
            <p className="text-sm max-[1000px]:text-xs">
              This MERN stack project is currently under Development ...
            </p>
            <div className="tools flex justify-around items-center flex-wrap gap-y-3">
              <span className="tool py-2 px-4 bg-zinc-950 rounded-2xl max-[1000px]:text-xs max-[1000px]:px-3">
                React
              </span>
              <span className="tool py-2 px-4 bg-zinc-950 rounded-2xl max-[1000px]:text-xs max-[1000px]:px-3">
                Express
              </span>
              <span className="tool py-2 px-4 bg-zinc-950 rounded-2xl max-[1000px]:text-xs max-[1000px]:px-3">
                Node
              </span>
              <span className="tool py-2 px-4 bg-zinc-950 rounded-2xl max-[1000px]:text-xs max-[1000px]:px-3">
                MongoDB
              </span>
            </div>
          </div>
          <div className="buttons flex justify-center items-center gap-x-5">
            <button className="demo px-5 py-2 ring-1 rounded-xl hover:ring-2 hover:ring-zinc-600 cursor-not-allowed max-[1000px]:text-sm max-[1000px]:px-3 ">
              Demo
            </button>
            <button className="source px-5 py-2 ring-1 rounded-xl hover:ring-2 hover:ring-zinc-600  max-[1000px]:text-sm max-[1000px]:px-3 cursor-not-allowed">
              Source
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
