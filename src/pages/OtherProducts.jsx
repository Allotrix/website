import React from 'react';


const OtherProducts = () => {
    return (
      <main className='bg-allotrix-bg text-allotrix-text relative overflow-hidden h-[100vh]'>
        <section className='flex bg-allotrix-bg h-full text-allotrix-text flex-col justify-center items-center py-24 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4 md:pt-48'>
          <div className='font-allotrix-font-secondary text-center w-full mt-10 p-10 md:p-[unset]'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              More <span className='text-allotrix-std'>Allotrix</span> Products
            </h1>
            <p className='text-lg text-[#D9D9D9]'>
              Coming Soon
            </p>
          </div>
        </section>
      </main>
  )
}

export default OtherProducts;