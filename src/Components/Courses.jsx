import React, { useContext } from "react";
import banner from "../banner/2.png";
import { CoursesContext } from "../Layout/Main";
import Course from "./Course";
const Courses = () => {
  const coursesData = useContext(CoursesContext);
  const courses = coursesData.data;

  return (
    <div className="mt-2">
      <div>
        <h2 className="text-3xl mb-4 text-center text-lime-600 font-bold">
          We quiz therefore we are.
        </h2>
      </div>
      <img className="mx-auto w-[70%] h-[300px]" src={banner} alt="" />

      <div className="grid grid-cols-2 gap-4">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
