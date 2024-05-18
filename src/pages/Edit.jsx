import {  useRouteLoaderData } from "react-router-dom";
import BlogForm from "../ui/BlogForm";


function Edit() {
  const post = useRouteLoaderData("post-detail");

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <h2 className="text-purple-500 text-center text-2xl font-bold">
          Edit Blogs
        </h2>
        <BlogForm post={post} />
      </div>
    </div>
  );
}

export default Edit;
