import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [icon, setIcon] = useState("../src/assets/nav/menuIcon.png");

  const handleClick = () => {
    setIcon((prev) =>
      isActive
        ? "../src/assets/nav/menuIcon.png"
        : "../src/assets/nav/closeIcon.png"
    );
    setIsActive((prev) => !prev);
    document.getElementById("nav").classList.toggle("max-[1400px]:hidden");
  };

  return (
    <header className="head fixed top-0 left-0 w-full flex justify-around text-white py-3 font-mono bg-zinc-800 max-[1400px]:justify-between max-[1400px]:gap-40 max-[650px]:justify-end">
      <h1 className="logo text-xl p-2 max-[1400px]:ml-28 max-[1200px]:ml-10 max-[650px]:hidden">
        Portfolio
      </h1>

      <figure>
        <img
          src={icon}
          alt="icon"
          className="min-[1400px]:hidden bg-zinc-600 p-1 rounded-lg active:ring-1 active:ring-zinc-700 active:scale-95 mr-10 max-[500px]:mr-2 max-[1000px]:h-[40px] max-[500px]:h-[35px]"
          onClick={handleClick}
        />
      </figure>

      <nav
        className="flex justify-around items-center w-[50%] bg-zinc-700 rounded-2xl max-[1400px]:flex-col max-[1400px]:w-[300px] max-[1400px]:absolute max-[1400px]:right-10 max-[1400px]:top-14 max-[1400px]:h-[350px] max-[1400px]:text-xl text-center max-[1400px]:hidden max-[1400px]:opacity-70 max-[500px]:right-3 max-[800px]:w-[200px] max-[800px]:text-lg "
        id="nav"
      >
        <a
          href="#"
          className="w-full py-1 rounded-2xl hover:border-y-2 hover:text-zinc-500 max-[800px]:py-0.3"
        >
          Home
        </a>
        <a
          href="#about"
          className="w-full py-1 rounded-2xl hover:border-y-2 hover:text-zinc-500 max-[800px]:py-0.3"
        >
          About
        </a>
        <a
          href="#experience"
          className="w-full py-1 rounded-2xl hover:border-y-2 hover:text-zinc-500 max-[800px]:py-0.3"
        >
          Tools
        </a>
        <a
          href="#projects"
          className="w-full py-1 rounded-2xl hover:border-y-2 hover:text-zinc-500  max-[800px]:py-0.3"
        >
          Projects
        </a>
        <a
          href="#footer"
          className="w-full py-1 rounded-2xl hover:border-y-2 hover:text-zinc-500 max-[800px]:py-0.3"
        >
          Contacts
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
