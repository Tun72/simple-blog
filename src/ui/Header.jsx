import { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  function handelNav() {
    setOpenNav((prev) => !prev);
  }
  return (
    <>
      <header className="h-24 z-50 relative container mx-auto px-[2rem] flex items-center justify-between">
        <div className="flex items-center justify-center">
          <a
            href="/"
            className="text-white uppercase font-bold text-2xl tracking-widest"
          >
            impulse
          </a>
        </div>
        <div className="flex items-center">
          <button onClick={handelNav}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {openNav && <Nav handelNav={handelNav} />}
        </div>
      </header>
      <div className="w-full h-24 bg-yellow-900 bg-opacity-95 absolute top-0 left-0"></div>
    </>
  );
}

export default Header;
