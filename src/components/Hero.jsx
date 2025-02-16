const Hero = () => {
  return (
    <div
      className="flex justify-center items-center w-full my-36 text-white font-hero gap-x-28 max-[1080px]:flex-col max-[650px]:my-20 max-[550px]:w-full max-[650px]:gap-0 "
      id="hero"
    >
      <div className="details max-w-[450px] max-[650px]:max-w-max ">
        <h1 className="text-3xl font-bold my-2 max-[650px]:text-2xl max-[430px]:text-xl">
          Hi, I'm Dishant
        </h1>
        <p className="my-5 max-[650px]:text-sm max-[430px]:text-xs">
          I'm a Computer Science student <br />
          at IIIT Surat. <br />I know MERN stack closely. <br /> Reach out if
          you'd like to learn more
        </p>
        <button className="btn px-4 py-1 rounded-2xl cursor-pointer bg-zinc-600 my-2 hover:ring-2 hover:ring-zinc-600 max-[650px]:text-sm">
          <a href="#footer">Contact Me</a>
        </button>
      </div>
      <figure className="max-[1080px]:my-10 w-[393px] h-[401px] max-[550px]:h-[60%] max-[550px]:w-[60%]">
        <img
          src="/src/assets/hero/me.jpg"
          alt="hero img"
          className="rounded-[50%]  "
        />
      </figure>
    </div>
  );
};

export default Hero;
