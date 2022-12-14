import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";

export const CoursesContext = createContext();

const Main = () => {
  const courses = useLoaderData();
  return (
    <CoursesContext.Provider value={courses}>
      <Header></Header>
      <Outlet></Outlet>
    </CoursesContext.Provider>
  );
};

export default Main;
