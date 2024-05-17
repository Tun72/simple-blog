import axios from "axios";
import { Form, redirect, useActionData } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { URL } from "../util/helper";
function BlogForm({ post }) {
  const data = useActionData();

  return (
    <Form className="py-6 px-9" method={`${post ? "PATCH" : "POST"}`}>
      {post?.id && <input type="hidden" defaultValue={post?.id} />}
      <div className="mb-5">
        <label
          for="title"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Blog title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={post?.title ?? ""}
          placeholder="something..."
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          for="image"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Image Url:
        </label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={post?.image ?? ""}
          placeholder="https://example.jpg"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-5">
        <label
          for="date"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Blog Date:
        </label>
        <input
          type="date"
          name="date"
          defaultValue={post?.date ?? ""}
          id="date"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-6 pt-4">
        <label
          for="description"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Blog Description:
        </label>
        <textarea
          id="message"
          rows="4"
          name="description"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Your message..."
        >
          {post?.description ?? ""}
        </textarea>
      </div>

      <div>
        <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
          {`${post ? "Edit" : "Submit"}`}
        </button>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const method = request.method;
  const postData = {
    ...data,
    id: data.id ? data.id : uuid(),
  };

  if (method !== "POST" && method !== "PATCH")
    throw new Error("Something went wrong 💥");

  const response = await axios[method.toLowerCase()](
    URL + `/posts${method === "PATCH" ? "/" + params.id : ""}`,
    JSON.stringify(postData),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
      },
    }
  );

  if (response.status === 422) return response;

  console.log(response);

  if (response.status !== 201 && response.status !== 200) throw new Error("Something went wrong 💥");

  return redirect("/posts");
}

export default BlogForm;
