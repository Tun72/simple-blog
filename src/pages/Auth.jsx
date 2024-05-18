import axios from "axios";
import AuthForm from "../ui/AuthForm";
import AuthLayout from "../ui/AuthLayout";
import { redirect } from "react-router-dom";
import { URL as BlogUrl } from "../util/helper";

function Auth() {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
}

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;

  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup")
    throw new Error("Authentication failed 💥");

  const formData = await request.formData();

  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const response = await axios.post(
      BlogUrl + "/" + mode,
      { ...authData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.status === 200) throw new Error("Authentication failed 💥");

    const data = await response.data;

    const token = data.token;

    localStorage.setItem("token", token);
    const expDate = new Date();
    expDate.setHours(expDate.getHours() + 1);
    localStorage.setItem("exp", expDate.toISOString());

    return redirect("/");
  } catch (e) {
    return e?.response?.data ?? e.message;
  }
};

export default Auth;
