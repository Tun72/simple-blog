import axios from "axios";
import BlogDetail from "../components/BlogDetail";
import { URL } from "../util/helper";
import { useLoaderData } from "react-router-dom";

function Details() {
  const blog = useLoaderData();
  return (
    <>
      <div class="relative h-96">
        <img
          src={blog.image}
          className="w-full h-full object-cover"
          alt={blog.title}
        />
      </div>
      <BlogDetail blog={blog} />
    </>
  );
}

export async function loader({ _, params }) {
  const request = await axios.get(`${URL}/posts/${params.id}`);

  if (request.status !== 200) throw new Error("Something Went Wrong 💥");
  const data = await request.data;

  console.log(data.post);
  return data.post;
}

export default Details;
