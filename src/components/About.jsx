const About = () => {
  return (
    <section
      className="about flex justify-center items-center mb-28 pt-20 "
      id="about"
    >
      <div className="flex justify-around items-center max-[1300px]:flex-col bg-zinc-900 max-w-[1000px] rounded-4xl   max-[1000px]:w-[80%]">
        <figure className="w-[500px] h-[500px] max-[1300px]:h-[60%] max-[1300px]:w-[60%]">
          <img
            src="/src/assets/about/aboutIcon.png"
            alt="about me"
            className="rounded-[50%]"
          />
        </figure>
        <div className="cards flex flex-col justify-evenly items-center max-w-[600px] mb-10 gap-y-10 ">
          <div className="card one flex mx-5 bg-linear-to-r from-zinc-700 to-zinc-950 p-2 rounded-2xl">
            <figure>
              <img
                src="/src/assets/about/cursorIcon.png"
                width={100}
                height={100}
                alt="curson icon"
              />
            </figure>
            <div className="mx-5">
              <h1 className="text-2xl font-bold max-[750px]:text-xl max-[650px]:text-lg max-[450px]:text-sm">
                Frontend Developer
              </h1>
              <p className="max-[750px]:text-sm max-[650px]:text-xs">
                I'm a Front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </div>
          <div className="card two flex mx-5 bg-linear-to-r from-zinc-700 to-zinc-950 p-2 rounded-2xl">
            <figure>
              <img
                src="/src/assets/about/serverIcon.png"
                width={100}
                height={100}
                alt="server icon"
              />
            </figure>
            <div className="mx-5">
              <h1 className="text-2xl font-bold max-[750px]:text-xl max-[650px]:text-lg max-[450px]:text-sm">
                Backend Developer
              </h1>
              <p className="max-[750px]:text-sm max-[650px]:text-xs">
                I have experience developing fast and optimized Back-end systems
                and APIs.
              </p>
            </div>
          </div>
          <div className="card three flex mx-5 bg-linear-to-r from-zinc-700 to-zinc-950 p-2 rounded-2xl">
            <figure>
              <img
                src="/src/assets/about/uiIcon.png"
                width={100}
                height={100}
                alt="ui icon"
              />
            </figure>
            <div className="mx-5">
              <h1 className="text-2xl font-bold max-[750px]:text-xl max-[650px]:text-lg max-[450px]:text-sm">
                Data Analyst
              </h1>
              <p className="max-[750px]:text-sm max-[650px]:text-xs">
                I have experience in analyzing Large and Dirty datasets with the
                python libraries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
