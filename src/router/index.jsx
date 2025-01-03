import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/routerLayout";

import Blog from "../pages/blog";
import HomePage from "../pages";
import About from "../pages/about";
import SinglePost from "../pages/blog/_id";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SinglePost />,
      },
    ],
  },
]);
