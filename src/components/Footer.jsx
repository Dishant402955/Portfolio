import Arrow from "../assets/icons/arrow-up-right.svg";

const Footer = () => {
  return (
    <div id="footer" className="py-10 flex justify-center items-center w-full">
      <div className="container bg-zinc-800 py-5 w-[60%] rounded-[80px] flex justify-around items-center max-[900px]:flex-col max-[600px]:w-[300px]">
        <div className="mt-14 mb-10 max-[900px]:mb-2 max-[600px]:mt-8 max-[600px]:mb-1">
          <h2 className="text-2xl mb-2  max-[600px]:text-lg select-none">Contact Me</h2>
          <div id="email">
            <p className="text-lg text-zinc-500 mb-2  max-[600px]:text-sm">dishantradadiya3036@gmail.com</p>
          </div>
        </div>
        <div id="links" className="mt-14 mb-10 max-[900px]:mt-2  max-[600px]:text-sm  max-[600px]:mb-5 max-[600px]:mt-2 select-none">
          <div id="linkedin">
            <a href="https://linkedin.com/in/dishant-radadiya" className="flex items-center gap-3 my-2" target="_blank">
              <span>Linkedin</span>
              <img src={Arrow} alt="arrow" width={18} className="bg-amber-50/40 rounded-full mr-2" />
            </a>
          </div>
          <div id="github">
            <a href="https://github.com/Dishant402955" className="flex items-center gap-3 my-2" target="_blank">
              <span>GitHub</span>
              <img src={Arrow} alt="arrow" width={18} className="bg-amber-50/40 rounded-full mr-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
