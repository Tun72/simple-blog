import { Link } from "react-router-dom";

function BlogList({ blog }) {
  const { date, description, id, image, title } = blog;

  return (
    <div>
      <Link to="/blog/this-is-latest-post/">
        <img
          src={image}
          className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover"
          alt=""
        />
      </Link>
      <div className="bg-gray-50 p-8">
        <div className="text-xs text-gray-600 uppercase font-semibold">
          {date}
        </div>
        <h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
          {title}
        </h2>
        <p className="mt-4 max-w-md">{description.slice(0, 200)}</p>
        <Link
          to={`/${id}/detail`}
          className="flex items-center mt-6 uppercase text-sm text-black font-semibold"
        >
          Read article
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BlogList;
