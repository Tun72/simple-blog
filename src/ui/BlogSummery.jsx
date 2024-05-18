import { useEffect } from "react";
import { Link, useFetcher } from "react-router-dom";

function BlogSummery() {
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/posts");
  }, [fetcher]);

  const blogs = fetcher?.data ?? [];
  return (
    <div className="flex flex-wrap bg-black">
      {blogs.map((blog, index) => {
        if (index > 2) return null;
        return (
          <Link
            key={index}
            to={`/${blog?.id}/detail`}
            className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
          >
            <div className="relative z-10">{blog?.title}</div>
            <img
              src={blog?.image}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              alt=""
            />
          </Link>
        );
      })}
    </div>
  );
}

export default BlogSummery;
