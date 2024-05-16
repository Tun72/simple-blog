import { NavLink } from "react-router-dom";

function Nav({ handelNav }) {
  return (
    <nav class="fixed inset-0 w-full h-full bg-white z-50 text-yellow-900">
      <div class="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
        <button onClick={handelNav} class="absolute top-0 left-0 mt-8 ml-6">
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
        <NavLink
          to="/"
          onClick={handelNav}
          class="inline-block border-b-4 border-transparent hover:border-yellow-900"
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          onClick={handelNav}
          class="inline-block border-b-4 border-transparent hover:border-yellow-900"
        >
          About
        </NavLink>
        <NavLink
          to="/posts"
          onClick={handelNav}
          class="inline-block border-b-4 border-transparent hover:border-yellow-900"
        >
          Blog
        </NavLink>
        <NavLink
          href="/post/create"
          onClick={handelNav}
          class="inline-block border-b-4 border-transparent hover:border-yellow-900"
        >
          Contact
        </NavLink>
      </div>
      <div class="absolute inset-0 w-full h-full bg-yellow-900 bg-opacity-20"></div>
    </nav>
  );
}

export default Nav;
