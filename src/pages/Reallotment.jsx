import React from 'react';
import Alert from '../components/Alert';
import Popup from 'reactjs-popup';

const Reallotment = () => {
  return (
    <main className='bg-allotrix-bg text-allotrix-text relative overflow-hidden px-4 md:px-[unset]'>
        <section className='flex flex-col items-center pt-24 pb-10 mt-16 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4 md:pt-48'>
            <h1 className='md:text-5xl text-4xl font-semibold text-center w-full text-allotrix-std font-allotrix-font-secondary'>
                Re-allotment Form
            </h1>
        </section>
        <form className='font-allotrix-font-secondary'>
            <section className='bg-[#232323] md:px-20 px-8 py-12 rounded-lg max-w-[700px] mx-auto text-[#FFFFFF] flex flex-col gap-6'>
                <label htmlFor="to" className='flex flex-col gap-[3px]'>
                    <p className='text-md'>To</p>
                    <input type="text" name='to' id='to' className='w-full border-none outline-none rounded-md px-2 py-[5px] text-[#000000]' />
                </label>
                <label htmlFor="name" className='flex flex-col gap-[3px]'>
                    <p className='text-md'>Full Name*</p>
                    <input type="text" name='name' id='name' className='w-full border-none outline-none rounded-md px-2 py-[5px] text-[#000000]' required />
                </label>
                <aside className='flex justify-between items-center gap-7'>
                    <label htmlFor="existingCommittee" className='flex flex-col gap-[3px]'>
                        <p className='text-md'>Existing Committee</p>
                        <input type="text" name='existingCommittee' id='existingCommittee' className='w-full border-none outline-none rounded-md px-2 py-[5px] text-[#000000]' />
                    </label>
                    <p className='border-r-2 border-[#ffffff] h-12'></p>
                    <label htmlFor="existingCountry" className='flex flex-col gap-[3px]'>
                        <p className='text-md'>Existing Country</p>
                        <input type="text" name='existingCountry' id='existingCountry' className='w-full border-none outline-none rounded-md px-2 py-[5px] text-[#000000]' />
                    </label>
                </aside>
                <aside className='flex justify-between items-center gap-7'>
                    <label htmlFor="newCommittee" className='flex flex-col gap-[3px]'>
                        <p className='text-md'>New Committee*</p>
                        <input type="text" name='newCommittee' id='newCommittee' className='w-full border-none outline-none rounded-md px-2 py-[5px] text-[#000000]' required />
                    </label>
                    <p className='border-r-2 border-[#ffffff] h-12'></p>
                    <label htmlFor="newCountry" className='flex flex-col gap-[3px]'>
                        <p className='text-md'>New Country*</p>
                        <input type="text" name='newCountry' id='newCountry' className='w-full border-none outline-none rounded-md px-2 py-[5px] text-[#000000]' required />
                    </label>
                </aside>
                <label htmlFor="note" className='flex flex-col gap-[3px]'>
                    <p className='text-md'>Note</p>
                    <textarea name="note" id="note" cols="30" rows="3" className='w-full border-none outline-none rounded-md px-2 py-[5px] text-[#000000]'></textarea>
                </label>
            </section>
            <div className='flex flex-col gap-10 items-center mb-24'>
                <Popup overlayStyle={{background: 'rgba(0, 0, 0, .5)'}} trigger={<button className='mt-14 mx-auto px-14 py-3 rounded-md bg-allotrix-std text-[#000000]'>SUBMIT</button>} modal nested>
                    {
                        (close) => (
                            <Alert sign={true} title={"Request Submitted"} message={"Please keep looking for re-allotment emails in your inbox/spam"} onclick = {() => close()} />
                        )
                    }
                </Popup>
                <p className='font-semibold text-lg'>
                    Get Allotrix for your MUN today! View <a href='https://allotrix.com/getallotrix/download' className='text-allotrix-std'>more details</a> 
                </p>
            </div>
        </form>
    </main>
  )
}

export default Reallotment;