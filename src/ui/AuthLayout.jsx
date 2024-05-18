import { Link } from "react-router-dom";

export default function AuthLayout({ children }) {
  return (
    <section className="bg-stone-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-bold text-purple-500 uppercase"
        >
          Blog.io
        </Link>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
