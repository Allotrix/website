import React, { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({img, title, content}) => {

    const [openNav, setOpenNav] = useState(false);

    return (
        <div className='w-[320px] bg-allotrix-bg rounded-2xl lg:w-[400px] border-[1px] border-solid border-allotrix-std p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img className='h-10 w-10' src={img} alt={img} />
                    <h3 className='font-allotrix-font-secondary text-lg'>
                        {title}
                    </h3>
                </div>
                <button className={`text-allotrix-std text-xl transition-all duration-300 ease-out ${openNav ? 'rotate-180' : ''}`} onClick={() => setOpenNav(!openNav)}>
                    <FaChevronCircleDown />
                </button>
            </div>
            <p className={`px-12 pt-3 text-sm ${openNav ? 'block' : 'hidden'}`}>
                {content}
            </p>
        </div>
    )
}

export default Accordion;