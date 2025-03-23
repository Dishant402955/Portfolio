import Book from "../assets/images/book-cover.png";
import { MdStars } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt, FaGithub, FaHtml5, FaReact, FaPython } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiMongoose, SiMongodb, SiOllama } from "react-icons/si";

const tools = [
  { id: 1, title: "JavaScript", Icon: IoLogoJavascript },
  { id: 2, title: "Typescript", Icon: BiLogoTypescript },
  { id: 3, title: "Git", Icon: FaGitAlt },
  { id: 4, title: "Github", Icon: FaGithub },
  { id: 5, title: "HTML5", Icon: FaHtml5 },
  { id: 6, title: "CSS3", Icon: IoLogoCss3 },
  { id: 7, title: "Tailwind", Icon: RiTailwindCssFill },
  { id: 8, title: "React", Icon: FaReact },
  { id: 9, title: "Nodejs", Icon: IoLogoNodejs },
  { id: 10, title: "Expressjs", Icon: SiExpress },
  { id: 11, title: "Nextjs", Icon: RiNextjsFill },
  { id: 12, title: "Mongoose", Icon: SiMongoose },
  { id: 13, title: "MongoDB", Icon: SiMongodb },
  { id: 14, title: "Python", Icon: FaPython },
  { id: 15, title: "Ollama", Icon: SiOllama },
];

const AboutSection = () => {
  return (
    <div className="py-20 flex justify-center items-center" id="about">
      <div className="container flex flex-col justify-center items-center">
        <p className="text-2xl font-bold my-4 lg:my-6 select-none">ABOUT ME</p>
        <h2 className="text-xl text-zinc-300 mt-2 ">A Glimpse into My World</h2>
        <p className="max-w-[280px] text-zinc-500 text mb-4 text-center">Learn more about who i am, what i do, and what inspires me</p>
        {/* flex-wrap flex justify-center items-start lg lg:my-10 */}
        <div className="grid grid-cols-2 max-[900px]:flex max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-center">
          <div id="toolbox" className="border border-zinc-500 m-2 px-3 py-4 rounded-xl bg-zinc-400/15 flex flex-col w-[95%] max-w-[330px] flex-wrap row-span-2">
            <div>
              <div className="flex gap-1 items-center mb-2 mt-3">
                <MdStars />
                {/* <img src={StarIcon} className="bg-amber-50/40 rounded-full mr-2 select-none" /> */}
                <h3 className="text-xl text-zinc-200/90 select-none">My Toolbox</h3>
              </div>
              <p className="text-zinc-400 my-5 mx-2">Explore the technologies and tools i use to craft my applications</p>
            </div>
            <div id="tools" className="flex flex-wrap gap-4 justify-center items-center my-6 max-[900px]:mt-2">
              {tools.map(({ id, title, Icon }) => {
                return (
                  <div className="flex items-center border w-fit px-2 py-3 border-zinc-500 rounded-lg text-sm text-zinc-300 select-none gap-x-2" key={id}>
                    <Icon />
                    <h4>{title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="reads" className="border border-zinc-500 m-2 px-3 py-4 rounded-xl bg-zinc-400/15 flex flex-col w-[95%] max-w-[330px] flex-wrap">
            <div className="flex gap-1 items-center mb-2 select-none">
              <MdStars />
              {/* <img src={StarIcon} className="bg-amber-50/40 rounded-full mr-2" /> */}
              <h3 className="text-xl text-zinc-200/90">My Reads</h3>
            </div>
            <p className="text-zinc-400 my-3 mx-2">Explore the books that shapes my Life</p>
            <div className="books flex justify-center items-center my-4 select-none">
              <img src={Book} alt="book" width={135} />
            </div>
          </div>
          <div id="hobbies" className="border border-zinc-500 m-2 px-3 py-4 rounded-xl bg-zinc-400/15 flex flex-col w-[95%] max-w-[330px]">
            <div className="flex gap-1 items-center mb-2 select-none">
              <MdStars />
              {/* <img src={StarIcon} className="bg-amber-50/40 rounded-full mr-2" /> */}
              <h3 className="text-xl text-zinc-200/90">Beyond the Code</h3>
            </div>
            <p className="text-zinc-400 my-3 mx-2">Explore my interests and hobbies beyond the digital realm</p>
            <div className="books flex justify-center items-center flex-wrap my-4 gap-2 select-none" id="hobby">
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
