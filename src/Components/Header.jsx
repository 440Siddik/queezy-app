import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex pl-[10%] pr-[10%] justify-between items-center h-12 bg-amber-200">
      <div>
        <h4 className="text-2xl font-bold text-red-500">Quizeey</h4>
      </div>
      <nav className="font-semibold text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 mr-5 bg-slate-50 p-2 rounded"
              : "text-lime-600 mr-5"
          }
          to={"/courses"}
        >
          Courses
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 mr-5 bg-slate-50 p-2 rounded"
              : "text-lime-600 mr-5"
          }
          to={"/stats"}
        >
          Stats
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 mr-5 bg-slate-50 p-2 rounded"
              : "text-lime-600 mr-5"
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
