import React from 'react';

const Alert = ({ message, onclick }) => {
  return (
    <div className='w-[420px] bg-allotrix-bg rounded-2xl hover:cursor-pointer lg:w-[500px] border-[1px] flex flex-col items-center border-solid border-allotrix-std p-4'>
        <p className='text-allotrix-text font-allotrix-font-secondary text-lg text-center m-2'>
            {message}
        </p>
        <button onClick={onclick} className='bg-allotrix-std rounded-md px-6 py-2 mx-auto mt-6'>
            OK
        </button>
    </div>
  )
}

export default Alert;