import React from 'react';
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const Alert = ({ sign, title, message, onclick }) => {
  return (
    <div className='w-[320px] bg-allotrix-bg rounded-2xl hover:cursor-pointer lg:w-[500px] border-[1px] flex flex-col items-center border-solid border-allotrix-std p-4'>
      <div className='bg-allotrix-std text-allotrix-text text-7xl rounded-md'>
        {
          sign ? (
            <FaCheckCircle className='p-2' />
          ) : (
            <IoIosWarning className='p-2' />
          )
        }
      </div>
      <h3 className='text-allotrix-text font-allotrix-font-secondary text-2xl text-center m-2 font-semibold'>
          {title}
      </h3>
      <p className='text-[gray] font-allotrix-font-secondary text-md text-center m-2'>
          {message}
      </p>
      <button onClick={onclick} className='bg-allotrix-std rounded-md px-6 py-2 mx-auto mt-6'>
          Okay
      </button>
    </div>
  )
}

export default Alert;