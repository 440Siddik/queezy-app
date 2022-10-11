import React from "react";

const Course = ({ course }) => {
  const { id, name, logo } = course;
  return (
    <div className="border-rose-800 border-2 w-[500px] h-[400px] mx-auto p-4 rounded-md mt-6">
      <img
        className="h-[300px] w-[500px] bg-pink-200 border-2 border-orange-400 rounded"
        src={logo}
        alt=""
      />
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <button className="bg-red-300 px-4 rounded-md py-2 text-white font-semibold">
          Start Test
        </button>
      </div>
    </div>
  );
};

export default Course;
