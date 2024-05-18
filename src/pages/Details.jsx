import axios from "axios";
import BlogDetail from "../components/BlogDetail";
import { URL } from "../util/helper";
import { redirect, useLoaderData } from "react-router-dom";
import { getToken } from "../util/auth";

function Details() {
  const blog = useLoaderData();
  return (
    <>
      <div className="relative h-96">
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

  return data.post;
}

export async function action({ request, params }) {
  const method = request.method;

  if (method !== "DELETE") return;

  const response = await axios.delete(`${URL}/posts/${params.id}`, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  if (response.status !== 200) {
    throw new Error("");
  }

  return redirect("/");
}

export default Details;
