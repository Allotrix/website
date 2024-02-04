import React, { useState } from 'react';
import { FAQS } from '../lib/constants';
import { FaChevronCircleDown } from "react-icons/fa";

const Faqs = () => {
  return (
    <section className='bg-allotrix-bg text-allotrix-text w-full flex flex-col items-center font-allotrix-font-secondary'>
        <h2 className='md:text-5xl mt-28 text-3xl p-2 text-center'>
            Frequently Asked Questions
        </h2>
        <div className='my-12 w-full flex flex-col gap-4 items-center md:px-32 px-4'>
            {
                FAQS.map((faq,i) => (
                    <Accordion key={i} title={faq.question} content={faq.answer} />
                ))
            }
        </div>
    </section>
  )
}

export default Faqs;

const Accordion = ({title, content}) => {
    
    const [openAccordion, setOpenAccordion] = useState(false);

    return (
        <div className='w-full bg-allotrix-bg hover:cursor-pointer rounded-2xl border-[1px] border-solid border-allotrix-std p-4' onClick={() => setOpenAccordion(!openAccordion)}>
            <div className='flex justify-between items-center'>
                <h3 className='font-allotrix-font-secondary text-lg'>
                    {title}
                </h3>
                <button className={`text-allotrix-std text-xl transition-all duration-300 ease-out ${openAccordion ? 'rotate-180' : ''}`}>
                    <FaChevronCircleDown />
                </button>
            </div>
            <p className={`pt-3 text-lg ${openAccordion ? 'block' : 'hidden'} text-[gray]`}>
                {content}
            </p>
        </div>
    )
}