import emailIcon from "../assets/contact/emailIcon.png";
import githubIcon from "../assets/contact/githubIcon.png";
import linkedinIcon from "../assets/contact/linkedinIcon.png";

const Footer = () => {
  return (
    <footer
      className="bg-zinc-950 flex justify-evenly items-center py-20 max-[750px]:flex-col max-[750px]:gap-y-16"
      id="footer"
    >
      <div className="headings flex flex-col justify-center gap-2">
        <h1 className="text-4xl max-[650px]:text-3xl">Contact</h1>
        <p className="text-xl max-[650px]:text-lg">Feel free to reach out!</p>
      </div>
      <div className="contacts flex flex-col justify-center items-start gap-y-3">
        <div className="mail flex justify-center items-center gap-2">
          <figure className="h-[40px] w-[40px] max-[800px]:h-[30px] max-[800px]:w-[30px] max-[650px]:h-[20px] max-[650px]:w-[20px]">
            <img
              src={emailIcon}
              alt="email"
            />
          </figure>
          <p className="address max-[800px]:text-sm max-[650px]:text-xs">
            dishantradadiya3036@gmail.com
          </p>
        </div>
        <div className="linkedin flex justify-center items-center gap-2">
          <figure className="h-[40px] w-[40px] max-[800px]:h-[30px] max-[800px]:w-[30px] max-[650px]:h-[20px]  max-[650px]:w-[20px]">
            <img
              src={linkedinIcon}
              alt="linkedin"
            />
          </figure>
          <p className="address max-[800px]:text-sm max-[650px]:text-xs">
            linkedin.com/dishant-radadiya
          </p>
        </div>
        <div className="github flex justify-center items-center gap-2">
          <figure className="h-[40px] w-[40px] max-[800px]:h-[30px] max-[800px]:w-[30px] max-[650px]:h-[20px]  max-[650px]:w-[20px]">
            <img
              src={githubIcon}
              alt="github"
            />
          </figure>
          <p className="address max-[800px]:text-sm max-[650px]:text-xs">
            github.com/Dishant402955
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
