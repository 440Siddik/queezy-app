import React from 'react';
import banner from '../banner/2.png'
const Courses = () => {
  return (
    <div className='mt-2'>
      <div>
        <h2 className="text-3xl mb-4 text-center text-lime-600 font-bold">We quiz therefore we are.</h2>
      </div>
      <img className="mx-auto w-[70%] h-[300px]" src={banner} alt="" />
    </div>
  );
};

export default Courses;