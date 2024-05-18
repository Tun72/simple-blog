import { useState } from "react";
import Nav from "./Nav";
import { Link, useLoaderData } from "react-router-dom";
import { HiLogin, HiLogout } from "react-icons/hi";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  const token = useLoaderData();
  function handelNav() {
    setOpenNav((prev) => !prev);
  }

  return (
    <>
      <header className="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {openNav && <Nav handelNav={handelNav} />}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="text-white uppercase font-bold text-2xl tracking-widest"
          >
            Blog.Io
          </Link>
        </div>

        <div className="flex items-center justify-end">
          {token ? (
            <Link to="/logout" className="">
              <HiLogout className="w-8 h-8 text-white" />
            </Link>
          ) : (
            <Link to="/auth?mode=login">
              <HiLogin className="w-8 h-8 text-white" />
            </Link>
          )}
        </div>
      </header>
      <div className="w-full h-24 bg-purple-900 bg-opacity-95 absolute top-0 left-0"></div>
    </>
  );
}

export default Header;
