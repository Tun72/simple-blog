import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div class="text-center py-12 mb-12 px-6">
      <h1 class="text-3xl lg:text-4xl mb-6 font-display text-black leading-tight">
        Something went wrong 😢
      </h1>
      <p class="max-w-lg mx-auto">
        {error.data || error.message}
        <Link to="/">&larr; Go back</Link>
      </p>
    </div>
  );
}

export default Error;
