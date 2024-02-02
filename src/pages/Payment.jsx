import React from 'react';
import { PACKAGES } from '../lib/constants';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <main className='bg-allotrix-bg text-allotrix-text relative overflow-hidden'>
        <section className='w-[95%] mx-auto flex flex-col justify-center md:flex-row items-center md:gap-20 py-24 mt-16 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:pt-48 pb-12 border-b border-solid border-allotrix-text'>
            <div className='flex flex-col gap-4 py-3 px-6'>
                <h1 className='text-6xl text-left md:text-7xl font-allotrix-font-secondary font-semibold pr-10 md:border-r-[1px] md:border-allotrix-text md:border-solid'>
                    One Step Away
                </h1>
                <p className='text-lg font-allotrix-font-secondary text-left'>
                    From experiencing <span className='text-allotrix-std'>seamless</span>, laid-back <span className='text-allotrix-std'>automation</span>.
                </p>
            </div>
            <aside className='flex flex-col gap-4 mt-8 items-start'>
                <p className='text-xl font-allotrix-font-secondary'>
                    INR 6999/-
                </p>
                <button className='bg-allotrix-std font-allotrix-font-secondary px-12 py-2 rounded-md'>
                    Pay
                </button>
            </aside>
        </section>
        <section className='text-xl font-allotrix-font-secondary flex md:flex-row flex-col gap-2 md:gap-10 items-center w-[90%] mx-auto justify-center my-6'>
            <h2>
                Choose your Allotrix plan
            </h2>
            <select name="package" className='rounded-md bg-[#252526] text-lg p-2 outline-none border-none'>
                <option value="Free">Free</option>
                <option value="Starter">Starter</option>
                <option value="Premium">Premium</option>
                <option value="Lifetime">Lifetime</option>
            </select>
            <h2>
                Or get a <a className='text-allotrix-std' href="mailto:allotrixapp@gmail.com">personalized quote</a>
            </h2>
        </section>
        <section className='mt-24 w-[90%] mx-auto pb-16 border-b border-solid border-allotrix-text'>
            <h2 className='text-center font-allotrix-font-secondary text-3xl font-semibold'>
                Features you get
            </h2>
            <article className='mt-6 flex md:flex-wrap justify-center gap-2 flex-col items-center md:h-[250px] md:w-[400px] mx-auto'>
                {
                    PACKAGES.map((feature) => (
                        <h2 className={`bg-allotrix-std px-4 h-[50px] leading-5 flex items-center justify-center text-center w-[200px] rounded-md font-allotrix-font-secondary text-lg text-[white]`}>
                            {feature}
                        </h2>
                    ))
                }
            </article>
        </section>
        <section className='w-[90%] mx-auto md:px-10 py-4 pb-8'>
            <h2 className='md:text-xl text-md font-allotrix-font-secondary'>
                <strong>NOTE:</strong> You pay only for the server. Allotrix is a students' initiative to simplify MUN hosting. 
            </h2>
            <Link to={'/team'}>
                <h2 className='text-allotrix-std md:text-xl text-md font-allotrix-font-secondary'>
                    Meet the team.
                </h2>
            </Link>
        </section>
    </main>
  )
}

export default Payment;