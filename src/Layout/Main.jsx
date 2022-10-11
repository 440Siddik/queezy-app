import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header';

export const teacherContext = createContext()

const Main = () => {
 const teachers = useLoaderData();
  return (
    <teacherContext.Provider value={teachers}>
      <Header></Header>
      <Outlet></Outlet>
    </teacherContext.Provider>
  );
};

export default Main;