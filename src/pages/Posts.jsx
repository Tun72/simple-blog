import axios from "axios";
import { URL } from "../util/helper";
import { useLoaderData } from "react-router-dom";
import BlogHeader from "../components/BlogHeader";
import BlogList from "../components/BlogList";

function Posts() {
  const blogs = useLoaderData();

  return (
    <>
      <BlogHeader />
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
        {blogs.map((blog) => (
          <BlogList blog={blog} key={blog.id} />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const request = await axios.get(`${URL}/posts`);

  if (request.status !== 200) throw new Error("Something Went Wrong 💥");

  const data = await request.data;
  return data.posts;
}

export default Posts;
