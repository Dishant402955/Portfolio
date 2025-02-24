import Book from "../assets/images/book-cover.png";
import StarIcon from "../assets/icons/star.svg";
import Html5 from "../assets/icons/html5.svg";
import Css3 from "../assets/icons/css3.svg";
import Reactjs from "../assets/icons/react.svg";
import Chrome from "../assets/icons/chrome.svg";
import GitHub from "../assets/icons/github.svg";
import JavaScript from "../assets/icons/square-js.svg";

const tools = [
  { id: 1, title: "HTML5", link: Html5 },
  { id: 2, title: "CSS3", link: Css3 },
  { id: 3, title: "React", link: Reactjs },
  { id: 4, title: "Chrome", link: Chrome },
  { id: 5, title: "GitHub", link: GitHub },
  { id: 6, title: "JavaScript", link: JavaScript },
];

const AboutSection = () => {
  return (
    <div className="py-20 flex justify-center items-center" id="about">
      <div className="container flex flex-col justify-center items-center">
        <p className="text-2xl font-bold my-4 lg:my-6">ABOUT ME</p>
        <h2 className="text-xl text-zinc-300 mt-2 ">A Glimpse into My World</h2>
        <p className="max-w-[280px] text-zinc-500 text mb-4 text-center">Learn more about who i am, what i do, and what inspires me</p>
        {/* flex-wrap flex justify-center items-start lg lg:my-10 */}
        <div className="grid grid-cols-2 max-[900px]:flex max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-center">
          <div id="toolbox" className="border border-zinc-500 m-2 px-3 py-4 rounded-xl bg-zinc-400/15 flex flex-col w-[95%] max-w-[330px] flex-wrap row-span-2">
            <div>
              <div className="flex gap-1 items-center mb-2 mt-3">
                <img src={StarIcon} className="bg-amber-50/40 rounded-full mr-2" />
                <h3 className="text-xl text-zinc-200/90">My Toolbox</h3>
              </div>
              <p className="text-zinc-400 my-3 mx-2">Explore the technologies and tools i use to craft my applications</p>
            </div>
            <div id="tools" className="flex flex-wrap gap-4 justify-center items-center my-4 mt-20 max-[900px]:mt-2">
              {tools.map((tool) => {
                return (
                  <div className="flex items-center gap-x-4 border w-fit px-4 py-3 border-zinc-500 rounded-lg text-md text-zinc-300" key={tool.id}>
                    <img src={tool.link} width={25} />
                    <h4>{tool.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="reads" className="border border-zinc-500 m-2 px-3 py-4 rounded-xl bg-zinc-400/15 flex flex-col w-[95%] max-w-[330px] flex-wrap">
            <div className="flex gap-1 items-center mb-2">
              <img src={StarIcon} className="bg-amber-50/40 rounded-full mr-2" />
              <h3 className="text-xl text-zinc-200/90">My Reads</h3>
            </div>
            <p className="text-zinc-400 my-3 mx-2">Explore the books that shapes my Life</p>
            <div className="books flex justify-center items-center my-4">
              <img src={Book} alt="book" width={135} />
            </div>
          </div>
          <div id="hobbies" className="border border-zinc-500 m-2 px-3 py-4 rounded-xl bg-zinc-400/15 flex flex-col w-[95%] max-w-[330px]">
            <div className="flex gap-1 items-center mb-2">
              <img src={StarIcon} className="bg-amber-50/40 rounded-full mr-2" />
              <h3 className="text-xl text-zinc-200/90">Beyond the Code</h3>
            </div>
            <p className="text-zinc-400 my-3 mx-2">Explore my interests and hobbies beyond the digital realm</p>
            <div className="books flex justify-center items-center flex-wrap my-4 gap-2" id="hobby">
              <div className="py-2 px-6 bg-zinc-950/35 border border-zinc-600 rounded-xl text-lg">
                <h4>Reading</h4>
              </div>
              <div className="py-2 px-6 bg-zinc-950/35 border border-zinc-600 rounded-xl text-lg">
                <h4>Cricket</h4>
              </div>
              <div className="py-2 px-6 bg-zinc-950/35 border border-zinc-600 rounded-xl text-lg">
                <h4>Music</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
