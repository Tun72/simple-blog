import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

import Loading from "./Loading";
import Footer from "./Footer";
// import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <section>
      <Header />
      <div>{isLoading ? <Loading /> : <Outlet />}</div>
      <Footer />
    </section>
  );
}

export default AppLayout;
