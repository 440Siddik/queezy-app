import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "./About";
import Blog from "./Blog";
import Courses from "./Courses";
import Stats from "./Stats";


export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    // loader:() => fetch('teachers.json'),
    children : [
      {path:'/',
       element:<Courses></Courses> 
      },
      {
        path:'courses',
        element:<Courses></Courses>
      },
      {
        path:'stats',
        element:<Stats></Stats>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'about',
        element:<About></About>
      }
    ]
  }
])