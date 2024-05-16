import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./pages/Home";
import Posts, { loader as PostsLoader } from "./pages/Posts";
import Create from "./pages/Create";
import Auth from "./pages/Auth";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import NotFount from "./ui/NotFount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/posts",
        element: <Posts />,
        loader: PostsLoader
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
            path: "edit",
            element: <Edit />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFount />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
