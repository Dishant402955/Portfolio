const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-4 left-0 w-[100%] ">
      <nav className="flex gap-1 p-2 border border-zinc-400/20 rounded-xl bg-zinc-600/50 backdrop-blur max-[450px]:gap-0 max-[600px]:p-0.5 max-[600px]:text-sm max-[1000px]:p-1 max-[1000px]:text-sm">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>

        <a href="#footer" className="nav-item">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
