import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        {/*         logo and menu bar */}
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Zafar
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white active:outline-none sm:hidden flex"
          >
            <img
              src={`${isOpen ? "assets/close.svg" : "assets/menu.svg"}`}
              alt="menu"
              className="h-6 w-6"
            />
          </button>

          {/*      nav links desktop        */}
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      {/*       nav links mobile     */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
