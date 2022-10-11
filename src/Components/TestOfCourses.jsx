import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TestOfCourses = ({ ts }) => {
  // console.log(ts);
  let correctAnswers;
  const handleEyeBtn = (correctAnswer) => {
    correctAnswers = `Correct Ans is............${correctAnswer}`;
    toast.success(correctAnswers)
  };
  const handleOption = (options , ts) => {
    if(options === ts.correctAnswer){
      toast.success(`Wow It's the Correct One`)
    }
    else{
      toast.error('Sorry This is Incorrect')
    }
  }
  const { options, question, correctAnswer, id } = ts;
  return (
    <div className="border border-red-900 mt-4 h-[440px] p-3 rounded-md ml-2 mr-2">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold text-fuchsia-600">
          Question : {question}
        </h2>
        <FontAwesomeIcon
          onClick={() => handleEyeBtn(correctAnswer)}
          className="text-green-600 "
          icon={faEye}
        ></FontAwesomeIcon>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-[50px]">
        <div className="bg-slate-300 border border-slate-700 h-[80px] flex items-center rounded mt-2">
          <input
            onClick={() => handleOption(options[0],ts)}
            className="ml-2"
            type="radio"
            name="opt"
            id="1"
          />{" "}
          {options[0]}
        </div>
        <div className="bg-slate-300 border border-slate-700 h-[90px] flex items-center rounded mt-2">
          <input
            onClick={() => handleOption(options[1],ts)}
            className="ml-2"
            type="radio"
            name="opt"
            id="2"
          />{" "}
          {options[1]}
        </div>
        <div className="bg-slate-300 border border-slate-700 h-[90px] flex items-center rounded">
          <input
            onClick={() => handleOption(options[2],ts)}
            className="ml-2"
            type="radio"
            name="opt"
            id="3"
          />{" "}
          {options[2]}
        </div>
        <div className="bg-slate-300 border border-slate-700 h-[90px] flex items-center rounded">
          <input
            onClick={() => handleOption(options[3],ts)}
            className="ml-2"
            type="radio"
            name="opt"
            id="4"
          />{" "}
          {options[3]}
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default TestOfCourses;
