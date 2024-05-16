import { useState } from "react";
import Nav from "./Nav";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  function handelNav() {
    setOpenNav((prev) => !prev);
  }
  return (
    <>
      <header class="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">
        <div class="flex items-center">
          <button onClick={handelNav}>
            <svg
              class="w-8 h-8 text-white"
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
        <div class="flex items-center justify-center">
          <a
            href="/"
            class="text-white uppercase font-bold text-2xl tracking-widest"
          >
            impulse
          </a>
        </div>
        <div class="flex items-center justify-end">
          <a href="/contact">
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
        </div>
      </header>
      <div class="w-full h-24 bg-yellow-900 bg-opacity-95 absolute top-0 left-0"></div>
    </>
  );
}

export default Header;
