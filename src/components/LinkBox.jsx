import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LinkBox = ({title, description, link}) => {
    return (
      <div className='bg-[#000000] border-[2px] border-allotrix-std rounded-xl w-[90%] p-2 h-[200px] md:w-[800px]'>
        <Link to={link}>
          <article className='flex items-center justify-between pl-4 md:pl-10 py-6 text-2xl md:text-4xl'>
            <h2 className='text-allotrix-std'>
              {title}
            </h2>
            <div>
              <FaAngleRight />
            </div>
          </article>
          <aside className='px-4 md:px-10'>
            <p className='text-[#858585] text-md md:text-lg'>
              {description}
            </p>
          </aside>
        </Link>
      </div>
    )
}  

export default LinkBox;