import BlogForm from "../ui/BlogForm";

function Create() {
  return (
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px] bg-white">
        <h2 className="text-purple-500 text-center text-2xl font-bold">New Blogs</h2>
        <BlogForm />
      </div>
    </div>
  );
}

export default Create;
