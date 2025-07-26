import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-1 border-stroke">
      <nav className="flex gap-32">
        <h3 className="text-md text-md py-4 px-6">rostik-viter</h3>

        <ul className="flex">
          <Link to={'/'} className="text-slate-50 border-1 border-stroke p-4 border-b-3 border-b-background hover:border-background/50 transition-colors duration-150 cursor-pointer">
            _hello
          </Link>
          <Link to={'/about'} className="border-1 border-stroke p-4 hover:border-background/50 transition-colors duration-150 cursor-pointer">
            _about-me
          </Link>
          <Link tp={'/projects'} className="border-1 border-stroke p-4 hover:border-background/50 transition-colors duration-150 cursor-pointer">
            _projects
          </Link>
        </ul>
      </nav>

      <button className="border-l-1 border-b-1 border-stroke py-4 px-6">
        _contact-me
      </button>
    </header>
  );
};

export default Header;
