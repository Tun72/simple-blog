import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="-mt-24 relative w-full py-12 px-12 bg-gray-900">
        <div className="relative z-10 text-center py-24 md:py-48">
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
            A taste of every lifestyle
          </h1>
          <Link
            to="/posts"
            className="inline-block bg-purple-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
            Read the blog
          </Link>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
          <Link to="/posts" className="border-b border-white">
            Find out more
          </Link>
          <Link to="" className="border-b border-white">
            Get in touch
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1490129375591-2658b3e2ee50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2244&amp;q=80"
          className="w-full h-full absolute inset-0 object-cover opacity-70"
          alt=""
        ></img>
      </div>
    </>
  );
}

export default HeroSection;
