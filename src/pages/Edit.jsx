import { useFetcher, useParams, useRouteLoaderData } from "react-router-dom";
import BlogForm from "../ui/BlogForm";
import { useEffect } from "react";

function Edit() {
  const params = useParams();
  //   const fetcher = useFetcher();
  //   const id = params.id;

  const post = useRouteLoaderData("post-detail");


  //   useEffect(
  //     function () {
  //       if (!fetcher.data && fetcher.state === "idle")
  //         fetcher.load(`/${id}/detail`);
  //     },
  //     [fetcher, id]
  //   );

  return (
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px] bg-white">
        <h2 className="text-purple-500 text-center text-2xl font-bold">
          Edit Blogs
        </h2>
        <BlogForm post={post} />
      </div>
    </div>
  );
}

export default Edit;
