const Experience = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mb-20 pt-20"
      id="experience"
    >
      <div className="">
        <h1 className="text-2xl my-4 max-[1000px]:text-xl font-bold">TOOLS</h1>
      </div>
      <div className="tools-list grid grid-cols-3 w-fit gap-x-14 gap-y-8 max-[650px]:grid-cols-2 max-[1000px]:gap-8">
        <div className="tool one flex flex-col justify-center items-center">
          <figure className="bg-zinc-900 p-4 rounded-[50%] flex justify-center items-center h-[120px] w-[120px] max-[1000px]:h-[100px] max-[1000px]:w-[100px] max-[400px]:h-[75px] max-[400px]:w-[75px]">
            <img
              src="/src/assets/skills/html.png"
              alt="html"
              className=""
            />
          </figure>
          <h1 className="text-xl max-[1000px]:text-lg max-[400px]:text-sm">
            HTML
          </h1>
        </div>
        <div className="tool two flex flex-col justify-center items-center">
          <figure className="bg-zinc-900 p-4 rounded-[50%] flex justify-center items-center h-[120px] w-[120px] max-[1000px]:h-[100px] max-[1000px]:w-[100px] max-[400px]:h-[75px] max-[400px]:w-[75px] ">
            <img
              src="/src/assets/skills/css.png"
              alt="css"
            />
          </figure>
          <h1 className="text-xl max-[1000px]:text-lg max-[400px]:text-sm">
            CSS
          </h1>
        </div>
        <div className="tool three flex flex-col justify-center items-center">
          <figure className="bg-zinc-900 p-4 rounded-[50%] flex justify-center items-center h-[120px] w-[120px] max-[1000px]:h-[100px] max-[1000px]:w-[100px] max-[400px]:h-[75px] max-[400px]:w-[75px]">
            <img
              src="/src/assets/skills/react.png"
              alt="react"
            />
          </figure>
          <h1 className="text-xl max-[1000px]:text-lg max-[400px]:text-sm">
            React
          </h1>
        </div>
        <div className="tool four flex flex-col justify-center items-center">
          <figure className="bg-zinc-900 p-4 rounded-[50%] flex justify-center items-center h-[120px] w-[120px] max-[1000px]:h-[100px] max-[1000px]:w-[100px] max-[400px]:h-[75px] max-[400px]:w-[75px]">
            <img
              src="/src/assets/skills/node.png"
              alt="node"
            />
          </figure>
          <h1 className="text-xl max-[1000px]:text-lg max-[400px]:text-sm">
            Node
          </h1>
        </div>
        <div className="tool five flex flex-col justify-center items-center">
          <figure className="bg-zinc-900 p-4 rounded-[50%] flex justify-center items-center h-[120px] w-[120px] max-[1000px]:h-[100px] max-[1000px]:w-[100px] max-[400px]:h-[75px] max-[400px]:w-[75px]">
            <img
              src="/src/assets/skills/graphql.png"
              alt="graphql"
            />
          </figure>
          <h1 className="text-xl max-[1000px]:text-lg max-[400px]:text-sm">
            GraphQL
          </h1>
        </div>
        <div className="tool six flex flex-col justify-center items-center">
          <figure className="bg-zinc-900 p-4 rounded-[50%] flex justify-center items-center h-[120px] w-[120px] max-[1000px]:h-[100px] max-[1000px]:w-[100px] max-[400px]:h-[75px] max-[400px]:w-[75px]">
            <img
              src="/src/assets/skills/mongodb.png"
              alt="mongodb"
            />
          </figure>
          <h1 className="text-xl max-[1000px]:text-lg max-[400px]:text-sm">
            {" "}
            MongoDB
          </h1>
        </div>
        <div className="tool seven flex flex-col justify-center items-center">
          <figure className="bg-zinc-900 p-4 rounded-[50%] flex justify-center items-center h-[120px] w-[120px] max-[1000px]:h-[100px] max-[1000px]:w-[100px] max-[400px]:h-[75px] max-[400px]:w-[75px]">
            <img
              src="/src/assets/skills/figma.png"
              alt="figma"
            />
          </figure>
          <h1 className="text-xl max-[1000px]:text-lg max-[400px]:text-sm">
            Figma
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
