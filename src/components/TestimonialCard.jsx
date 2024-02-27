import React from 'react';

const TestimonialCard = ({name, message, img, designation}) => {
  return (
    <div className='bg-[#252526] text-allotrix-text w-[480px] h-[] font-allotrix-font-secondary px-8 py-4 rounded-md border border-solid border-allotrix-std'>
        <div className='flex gap-2 items-center'>
            <div className='h-[50px] w-[50px] rounded-full'>
                <img className='max-h-[100%] max-w-[100%] rounded-full object-contain' src={img} alt="AV" />
            </div>
            <div>
                <h3 className='font-bold text-xl'>
                    {name}
                </h3>
                <h5 className='text-[gray] text-sm'>
                    {designation}
                </h5>
            </div>
        </div>
        <div className='text-[gray] text-md mt-6 leading-5'>
            {message}
        </div>
    </div>
  )
}

export default TestimonialCard;