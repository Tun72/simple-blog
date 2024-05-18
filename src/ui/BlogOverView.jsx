import { Link } from "react-router-dom";

function BlogOverView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-white p-12 md:p-24 flex justify-end items-center">
        <a href="/blog/this-is-latest-post/">
          <img
            src="https://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1960&amp;q=80"
            className="w-full max-w-md"
            alt=""
          />
        </a>
      </div>
      <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
        <div className="max-w-md">
          <div className="w-24 h-2 bg-purple-800 mb-4"></div>
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
            This is my third &amp; latest post
          </h2>
          <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution.
          </p>
          <Link
            to="/posts"
            className="inline-block border-2 border-purple-800 font-light text-purple-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-purple-800 hover:text-white"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogOverView;
