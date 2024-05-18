import axios from "axios";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { URL } from "../util/helper";
import { getToken } from "../util/auth";
function BlogForm({ post }) {
  const navigation = useNavigation();
  let data = useActionData();
  const errors = data?.errors ?? null;
  data = data?.message ?? data;

  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="py-6 px-9" method={`${post ? "PATCH" : "POST"}`}>
      {post?.id && <input type="hidden" defaultValue={post?.id} />}
      {data && (
        <h2 className="text-red-500 bg-red-200 px-2 py-3 mb-2 rounded-md">
          {data}
        </h2>
      )}

      <div className="mb-5">
        <label
          htmlFor="title"
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
        {errors && <span className="text-red-500">{errors?.title}</span>}
      </div>

      <div className="mb-5">
        <label
          htmlFor="image"
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
        {errors && <span className="text-red-500">{errors?.image}</span>}
      </div>

      <div className="mb-5">
        <label
          htmlFor="date"
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
        {errors && <span className="text-red-500">{errors?.date}</span>}
      </div>

      <div className="mb-6 pt-4">
        <label
          htmlFor="description"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Blog Description:
        </label>
        <textarea
          id="message"
          rows="4"
          name="description"
          defaultValue={post?.description ?? ""}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Your message..."
        ></textarea>
        {errors && <span className="text-red-500">{errors?.description}</span>}
      </div>

      <div>
        <button
          disabled={isSubmitting}
          className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          {isSubmitting ? "Submitting..." : post ? "Edit" : "Submit"}
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

  try {
    const response = await axios[method.toLowerCase()](
      URL + `/posts${method === "PATCH" ? "/" + params.id : ""}`,
      JSON.stringify(postData),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getToken(),
        },
      }
    );

    if (response.status === 201 || response.status === 200)
      return redirect("/posts");
  } catch (e) {
    return e?.response?.data ?? e.message;
  }
}

export default BlogForm;
