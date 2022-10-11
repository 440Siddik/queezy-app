import React from "react";
import { useLoaderData } from "react-router-dom";
import TestOfCourses from "./TestOfCourses";

const Test = () => {
  const testData = useLoaderData();
  const test = testData.data.questions;

  return (
    <div>
      
        <h1 className="text-4xl text-red-500 font-bold text-center mt-4">
          Test Of Courses
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {
            test.map(ts => <TestOfCourses key={ts.id} ts={ts}></TestOfCourses>)
          }
      </div>
    </div>
  );
};

export default Test;
