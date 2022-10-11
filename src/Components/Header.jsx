import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex pl-[10%] pr-[10%] justify-between items-center h-12 bg-amber-200">
      <div>
        <h4 className="text-2xl font-bold text-red-500">Quizeey</h4>
      </div>
      <nav className="text-lime-600 font-semibold text-xl">
        <Link className="mr-5" to={"/courses"}>
          Courses
        </Link>
        <Link className="mr-5" to={"/stats"}>
          Stats
        </Link>
        <Link className="mr-5" to={"/blog"}>
          Blog
        </Link>
        <Link className="mr-5" to={"/about"}>
          About Us
        </Link>
      </nav>
    </div>
  );
};

export default Header;
