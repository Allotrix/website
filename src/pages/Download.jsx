import React, { useContext } from 'react';
import { FaWindows, FaApple } from "react-icons/fa";
import { getDeviceType } from '../Utility/OSfinder';  
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import TestimonialCard from '../components/TestimonialCard';
import { USERS } from '../lib/constants';
import { AuthContext } from '../contexts/AuthContext';


const Download = () => {

    const context = useContext(AuthContext);
    const { user } = context;

    const deviceType = getDeviceType();

    const ButtonRenderContent = () => {
        if (deviceType === 'Windows') {
            return (
                <a href={'/getallotrix/download/payment'} className='flex gap-2 items-center bg-allotrix-std py-4 px-10 rounded-md font-bold text-sm relative'>
                    <div className='absolute -top-[8px] -left-[8px] bg-[#2194ff] rounded-md font-allotrix-font-secondary text-[10px] px-[6px] py-0'>
                        BETA
                    </div>
                    Get For Windows
                    <FaWindows />
                </a>
            );
        } else if (deviceType === 'Mac') {
            return (
                <a href={'/getallotrix/download/payment'} className='flex gap-2 items-center bg-allotrix-std py-4 px-10 rounded-md font-bold text-sm relative'>
                    <div className='absolute -top-[8px] -left-[8px] bg-[#2194ff] rounded-md font-allotrix-font-secondary text-[10px] px-[6px] py-0'>
                        BETA
                    </div>
                    Get For Mac
                    <FaApple />
                </a>
            );
        } else {
            return (
                <a href={'/getallotrix/download/payment'} className='flex gap-2 items-center bg-allotrix-std py-4 px-10 rounded-md font-bold text-sm'>
                    Not available for this OS
                </a>
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
                </div>
                <div className='font-allotrix-font-secondary flex flex-col md:flex-row items-center gap-6 mt-12 md:mt-24 mx-auto'>
                    {
                        user ? (
                            ButtonRenderContent()
                        ) : (
                            <a href={'/login'} className='flex gap-2 items-center bg-allotrix-std py-4 px-10 rounded-md font-bold text-sm'>
                                Login to download
                            </a>
                        )
                    }
                
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
                        Allotrix have worked with 10+ colleges and have been found useful by 100+ individuals.
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
                                                <TestimonialCard key={index} name={testimonial.name} designation={testimonial.designation} message={testimonial.message} img={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png'} />
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
                    <a title={'Automation Solutions'} description={'Get individual tools for cheaper rates.'} href = "/getallotrix/otherProducts" />
                </div>
            </section>
        </main>
    )
}

export default Download;