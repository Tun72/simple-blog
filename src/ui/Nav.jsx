import { NavLink,} from "react-router-dom";
import { getToken } from "../util/auth";

function Nav({ handelNav }) {
  const token = getToken();

  return (
    <nav className="fixed inset-0 w-full h-full bg-white z-50 text-purple-900">
      <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
        <button onClick={handelNav} className="absolute top-0 left-0 mt-8 ml-6">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
        <NavLink
          to="/"
          onClick={handelNav}
          className="inline-block border-b-4 border-transparent hover:border-purple-900"
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          onClick={handelNav}
          className="inline-block border-b-4 border-transparent hover:border-purple-900"
        >
          Blog
        </NavLink>

        {token && (
          <NavLink
            to="/post/create"
            onClick={handelNav}
            className="inline-block border-b-4 border-transparent hover:border-purple-900"
          >
            New Blog
          </NavLink>
        )}
      </div>
      <div className="absolute inset-0 w-full h-full bg-purple-900 bg-opacity-20"></div>
    </nav>
  );
}

export default Nav;
