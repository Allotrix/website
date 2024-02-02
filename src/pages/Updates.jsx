import React from 'react';
import { UPDATES } from '../lib/constants';

const Updates = () => {
  return (
    <section className='bg-allotrix-bg text-allotrix-text flex flex-col items-center py-24 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4 md:pt-48'>
        <div className='font-allotrix-font-secondary w-full text-center mt-16 md:mt-0'>
            <h1 className='font-bold text-3xl md:text-4xl md:mb-10 px-2'>
                Exciting Upcoming Updates on Allotrix!
            </h1>
        </div>
        <div className='w-full h-[auto] flex flex-col items-center mt-6 gap-4'>
            {
                UPDATES.map((update) => (
                    <UpdateCard date={update.date} title={update.title} description={update.body} />
                ))
            }
        </div>
    </section>
  )
}

export default Updates;

const UpdateCard = ({ date, title, description }) => {
    return (
        <div className='bg-allotrix-bg border border-allotrix-std rounded-lg w-[80%] h-[auto] flex flex-col gap-4 p-4 font-allotrix-font-secondary'>
            <h2 className='text-3xl font-bold'>
                {date}
            </h2>
            <h3 className='text-2xl font-semibold'>
                {title}
            </h3>
            <p className='text-md text-left'>
                {description}
            </p>
        </div>
    )
}