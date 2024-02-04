import React, { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({img, title, content}) => {

    const [openAccordion, setOpenAccordion] = useState(false);

    return (
        <div className='w-[320px] bg-allotrix-bg rounded-2xl hover:cursor-pointer lg:w-[400px] border-[1px] border-solid border-allotrix-std p-4' onClick={() => setOpenAccordion(!openAccordion)}>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img className='h-10 w-10' src={img} alt={img} />
                    <h3 className='font-allotrix-font-secondary text-lg'>
                        {title}
                    </h3>
                </div>
                <button className={`text-allotrix-std text-xl transition-all duration-300 ease-out ${openAccordion ? 'rotate-180' : ''}`}>
                    <FaChevronCircleDown />
                </button>
            </div>
            <p className={`px-12 pt-3 text-sm ${openAccordion ? 'block' : 'hidden'}`}>
                {content}
            </p>
        </div>
    )
}

export default Accordion;