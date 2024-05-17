import { redirect } from "react-router-dom";

export function tokenLoader() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const duration = getExpDuration();
  if (duration < 0) return "TOKEN EXP";
  return token;
}

export function getToken() {
  return tokenLoader();
}

export function getExpDuration() {
  const expDate = localStorage.getItem("exp");
  const expDateInMili = new Date(expDate);
  const currentDateInMili = new Date();
  const duration = expDateInMili - currentDateInMili;

  return duration;
}

export const checkTokenLoader = () => {
  if (!getToken()) return redirect("/auth?mode=login");

  return null;
};
