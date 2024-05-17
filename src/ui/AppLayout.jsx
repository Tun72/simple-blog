import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import Header from "./Header";

import Loading from "./Loading";
import Footer from "./Footer";
import { useEffect } from "react";
// import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return;

    if (token === "TOKEN EXP") {
      submit(null, { action: "/logout", method: "POST" });
    }
    console.log(token);
  }, [token, submit]);

  return (
    <section>
      <Header />
      <div>{isLoading ? <Loading /> : <Outlet />}</div>
      <Footer />
    </section>
  );
}

export default AppLayout;
