import React from "react";
import { Form, Link, useSearchParams } from "react-router-dom";

export default function AuthForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <Form className="space-y-4 md:space-y-6" method="POST">
      <h2 className="text-xl font-bold leading-tight tracking-tight text-purple-500 md:text-2xl ">
        {isLogin ? "Sign in to your account" : "Sign up new account"}
      </h2>

      <div>
        <label
          for="email"
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
      </div>
      <div>
        <label
          for="password"
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
      </div>
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        {isLogin ? "Login" : "Register"}
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
