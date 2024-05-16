import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Create from "./pages/Create";
import Auth from "./pages/Auth";
import Details from "./pages/Details";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Posts />,
      },
      {
        path: "/post/create",
        element: <Create />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: ":id",
        id: "post-detail",
        children: [
          {
            index: true,
            element: <Details />,
          },
          {
            path: "/post/edit",
            element: <Edit />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
