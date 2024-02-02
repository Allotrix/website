import React from 'react';
import { FaWindows, FaApple } from "react-icons/fa";
import LinkBox from '../components/LinkBox';
import { getDeviceType } from '../Utility/OSfinder';  
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import TestimonialCard from '../components/TestimonialCard';
import { USERS } from '../lib/constants';


const Download = () => {

const deviceType = getDeviceType();

const ButtonRenderContent = () => {
    if (deviceType === 'Windows') {
        return (
            <Link to={'/getallotrix/download/payment'} className='flex gap-2 items-center bg-allotrix-std py-4 px-10 rounded-md font-bold text-sm'>
                Get For Windows
                <FaWindows />
            </Link>
        );
    } else if (deviceType === 'Mac') {
        return (
            <Link to={'/getallotrix/download/payment'} className='flex gap-2 items-center bg-allotrix-std py-4 px-10 rounded-md font-bold text-sm'>
                Get For Mac
                <FaApple />
            </Link>
        );
    } else {
        return (
            <Link to={'/getallotrix/download/payment'} className='flex gap-2 items-center bg-allotrix-std py-4 px-10 rounded-md font-bold text-sm'>
                Not available for this OS
            </Link>
        );
    }
    
};

  return (
    <main className='bg-allotrix-bg text-allotrix-text relative overflow-hidden'>
        <section id='download' className='flex bg-allotrix-bg text-allotrix-text flex-col items-center py-24 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4 md:pt-48'>
            <div className='font-allotrix-font-secondary text-center w-full mt-10 p-10 md:p-[unset]'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                    Get started with <span className='text-allotrix-std'>Allotrix</span> today
                </h1>
                <p className='text-lg text[#D9D9D9]'>
                </p>
            </div>
            <div className='font-allotrix-font-secondary flex flex-col md:flex-row items-center gap-6 mt-12 md:mt-24 mx-auto'>
            {ButtonRenderContent()}
               
                <p className='font-bold font-allotrix-font-secondary'>
                    or
                </p>
                <a href="mailto:allotrixapp@gmail.com?subject=Meeting%20Request" className='flex gap-2 items-center text-[white] border border-allotrix-std py-4 px-10 rounded-md font-bold text-sm'>
                    Schedule a meeting
                </a>
            </div>
        </section>
        <section className='flex bg-[#161617] text-allotrix-text flex-col items-center py-24 relative text-center gap-10 md:items-start md:text-left md:gap-4'>
            <div className='font-allotrix-font-secondary w-full text-center px-4 z-10'>
                <h2 className='text-3xl md:text-5xl font-semibold'>
                    Allotrix from customer Point Of View
                </h2>
                <p className='text-md text-[#858585] mt-4 px-4 md:px-[unset] text-center'>
                    Allotrix have worked with x colleges and have been found useful by z individuals.
                </p>
            </div>
            <section className='relative'>
                <div className='w-full blur-[150px] rounded-full h-32 absolute bg-allotrix-std -z-100 top-56' />
                <div className='mt-14 px-4 sm:px-6 flex flex-col overflow-x-hidden overflow-visible'>
                    {
                        [...Array(2)].map((arr, index) => (
                            <div key={index} className={
                                twMerge(
                                    clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                                        'flex-row-reverse': index === 1,
                                        'animate-[slide_250s_linear_infinite]': true,
                                        'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                                        'ml-[100vw]': index === 1
                                    }),
                                    'hover:paused'
                                )
                                }>
                                    {
                                        USERS.map((testimonial, index) => (
                                            <TestimonialCard key={index} name={testimonial.name} message={testimonial.message} img={'data:image/jpeg;base64,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'} school={'BSA Crescent'} />
                                        ))
                                    }
                            </div>
                        ))
                    }
                </div>
            </section>   
        </section>
        <section className='flex bg-allotrix-bg text-allotrix-text flex-col items-center py-24 text-center gap-10 md:items-start md:text-left md:px-44 md:gap-4'>
            <div className='font-allotrix-font-secondary text-center px-4 z-10'>
                <h5 className='text-lg md:text-left text-center'>
                    Don't see what you are looking for?
                </h5>
                <h2 className='text-3xl md:text-5xl'>
                    This Might be Helpful
                </h2>
            </div>
            <div className='mt-10 w-full px-6'>
                <LinkBox title={'Automation Solutions'} description={'Get individual tools for cheaper rates.'} link = "/getallotrix/otherProducts" />
            </div>
        </section>
    </main>
  )
}

export default Download;