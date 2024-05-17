import { Link, useSubmit } from "react-router-dom";

function BlogDetail({ blog }) {
  const { title, id, description, date } = blog;
  const submit = useSubmit();

  function handelDelete() {
    const isDelete = window.confirm("Are U Sure ?");
    if (!isDelete) return;
    console.log(isDelete);
    submit(null, { method: "DELETE" });
  }
  return (
    <div className="max-w-4xl mx-auto bg-white py-12 px-12 lg:px-24 -mt-32 relative z-10">
      <h2 className="mt-4 uppercase tracking-widest text-xs text-gray-600">
        {date}
      </h2>
      <h1 className="font-display text-2xl md:text-3xl text-gray-900 mt-4">
        {title}
      </h1>
      <Link
        to={`/${id}/edit`}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mt-4 inline-block"
      >
        Edit Post
      </Link>

      <div className="prose prose-sm sm:prose lg:prose-lg mt-6">
        <blockquote>
          <p>{description}</p>
        </blockquote>
      </div>

      <h2 className="text-red-500 mt-6 text-xl">Danger Zone</h2>
      <div className=" bg-red-100 rounded-xl px-5 py-5 flex items-center justify-between mt-2">
        <p className="text-red-500 text-sm line-clamp-1 lg:line-clamp-none">
          Delete this Blog.
          <br />
          Once you delete a blog, there is no going back.
        </p>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handelDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BlogDetail;
