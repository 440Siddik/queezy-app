import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:flex pl-[10%] pr-[10%] justify-between items-center h-12 bg-amber-200">
      <div>
        <h4 className="text-2xl font-bold text-red-500">Quizeey</h4>
      </div>
      <nav className="flex justify-center mt-3 lg:font-semibold text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 mr-5 bg-slate-300 p-2 rounded"
              : "text-lime-600 mr-5 font-semibold"
          }
          to={"/courses"}
        >
          Courses
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 mr-5 bg-slate-300 p-2 rounded"
              : "text-lime-600 mr-5 font-semibold"
          }
          to={"/stats"}
        >
          Stats
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 mr-5 bg-slate-300 p-2 rounded "
              : "text-lime-600 mr-5 font-semibold"
          }
          to={"/blog"}
        >
          Blog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
