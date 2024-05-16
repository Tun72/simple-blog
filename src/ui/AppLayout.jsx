import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <section>
      <Header />
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default AppLayout;
