import memojiImage from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";

const HeroSection = () => {
  return (
    <div className="py-24 md:py-36 lg:py-32 flex justify-center items-center" id="hero">
      <div className="container flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={memojiImage} alt="Person Behind computer" className="size-[100px] lg:size-[150px]" />
          <div className="flex justify-center items-center bg-zinc-950 px-4 py-1 my-2 rounded-xl text-xs gap-2 lg:text-sm">
            <div className="bg-green-600 size-1.5 rounded-full lg:size-2"></div>
            <div className="text-zinc-100/60">Available for collaboration</div>
          </div>
        </div>
        <h1 className="font-mono text-3xl flex justify-center items-center my-5 max-w-[370px] text-center font-bold selection:bg-white selection:text-black lg:text-4xl lg:max-w-[400px] max-sm:text-2xl">
          Building Functional Websites
        </h1>
        <p className="max-w-[370px] text-center font-extralight text-zinc-400/50 my-4 selection:bg-black selection:text-white lg:text-lg lg:max-w-[450px]">
          I Specialize in transforming designs into functional, high-performance web apps. Let's Discuss your next project.
        </p>
        <div className="flex gap-3 justify-center items-center my-5 sm:flex-col sm:gap-y-4 md:flex-row lg:text-lg font-extralight max-sm:flex-col">
          <button className="flex justify-center border border-zinc-700 py-3 px-5 rounded-xl">
            <span className="pr-2">
              <a href="#projects">Explore My Work</a>
            </span>
            <img src={ArrowDown} width={15} height={15} className="bg-amber-50/40 rounded-full" />
            {/* <ArrowDown width={20} height={25} /> */}
          </button>
          <button className="flex justify-center bg-zinc-950 py-3 px-6 rounded-xl">
            <span>👋</span>
            <span className="ml-2">
              <a href="#footer">Let's Connect</a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
