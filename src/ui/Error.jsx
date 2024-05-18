import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div class="text-center py-12 mb-12 px-6">
      <h1 class="text-3xl lg:text-4xl mb-6 font-display text-black leading-tight">
        Something went wrong 😢
      </h1>
      <p class="max-w-lg mx-auto">
        {error.data || error.message}
        <button onClick={() => navigate(-1)}>&larr; Go back</button>
      </p>
    </div>
  );
}

export default Error;
