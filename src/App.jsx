import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./pages/Home";
import Posts, { loader as PostsLoader } from "./pages/Posts";
import Create from "./pages/Create";
import Auth, { action as AuthAction } from "./pages/Auth";
import Details, {
  loader as DetailLoader,
  action as DeleteAction,
} from "./pages/Details";
import Edit from "./pages/Edit";
import NotFount from "./ui/NotFount";
import { action as CreateAction } from "./ui/BlogForm";
import { loader as LogoutLoader } from "./pages/Logout";
import { checkTokenLoader, tokenLoader } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: tokenLoader,
  },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    loader: tokenLoader,
    id: "root",
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
        loader: checkTokenLoader,
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
            action: DeleteAction,
          },
          {
            path: "edit",
            element: <Edit />,
            action: CreateAction,
            loader: checkTokenLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    action: AuthAction,
    errorElement: <Error />,
  },
  {
    path: "/logout",
    loader: LogoutLoader,
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
