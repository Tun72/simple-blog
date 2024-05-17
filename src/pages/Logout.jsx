import { redirect } from "react-router-dom";

export async function loader() {
  localStorage.removeItem("token");
  localStorage.removeItem("exp");

  return redirect("/");
}
