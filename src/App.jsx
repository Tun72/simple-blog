import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./pages/Home";
import Posts, { loader as PostsLoader } from "./pages/Posts";
import Create from "./pages/Create";
import Auth from "./pages/Auth";
import Details, { loader as DetailLoader } from "./pages/Details";
import Edit from "./pages/Edit";
import NotFount from "./ui/NotFount";
import { action as CreateAction } from "./ui/BlogForm";

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
        loader: PostsLoader,
      },
      {
        path: "/post/create",
        element: <Create />,
        action: CreateAction,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/:id",
        id: "post-detail",
        loader: DetailLoader,
        children: [
          {
            index: true,
            path: "detail",
            element: <Details />,
            loader: DetailLoader,
          },
          {
            path: "edit",
            element: <Edit />,
            action: CreateAction,
          },
          {
            path: "delete",
            
          }
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
