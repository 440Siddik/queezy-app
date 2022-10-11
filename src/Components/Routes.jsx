import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Blog from "./Blog";
import Courses from "./Courses";
import ErrorPage from "./ErrorPage";
import Stats from "./Stats";
import Test from "./Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Courses></Courses> },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "stats",
        element: <Stats></Stats>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },

      {
        path: "course/:id",
        element: <Test></Test>,
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
      },
    ],
  },
]);
