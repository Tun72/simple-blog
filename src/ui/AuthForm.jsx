import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();

  const isLogin = searchParams.get("mode") === "login";
  let data = useActionData();
  const errors = data?.errors ?? null;
  data = data?.message ?? data;

  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="space-y-4 md:space-y-6" method="POST">
      {data && (
        <h2 className="text-red-500 bg-red-200 px-2 py-3 mb-2 rounded-md">
          {data}
        </h2>
      )}
      <h2 className="text-xl font-bold leading-tight tracking-tight text-purple-500 md:text-2xl ">
        {isLogin ? "Sign in to your account" : "Sign up new account"}
      </h2>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-purple-900"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-purple-50 border border-purple-300 text-purple-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="name@company.com"
          required=""
        />
        {errors && <span className="text-red-500">{errors?.email}</span>}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-purple-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-purple-50 border border-purple-300 text-purple-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          required=""
        />
        {errors && <span className="text-red-500">{errors?.password}</span>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        {isSubmitting ? "Submitting..." : isLogin ? "Login" : "Register"}
      </button>

      {isLogin ? (
        <p className="text-sm font-light text-gray-500  ">
          Don’t have an account yet?
          <Link
            to="/auth?mode=signup"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      ) : (
        <p className="text-sm font-light text-gray-500 ">
          Already have an account yet?
          <Link
            to="/auth?mode=login"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      )}
    </Form>
  );
}
