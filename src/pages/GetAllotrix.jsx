import React from 'react';
import LinkBox from '../components/LinkBox';
import { animate, motion } from 'framer-motion';

const GetAllotrix = () => {

  const animations = {
    left: {
        initial: {
            x: -100,
            opacity: 0
        },

        whileInView: {
            x: 0,
            opacity: 1
        },

        viewport: {
            once: true
        }
    },

    right: {
        initial: {
            x: 100,
            opacity: 0
        },

        whileInView: {
            x: 0,
            opacity: 1
        },

        viewport: {
            once: true
        }
    },

    up: {
        initial: {
            y: 100,
            opacity: 0
        },

        whileInView: {
            y: 0,
            opacity: 1
        },

        viewport: {
            once: true
        }
    }


}
  return (
    <>
      <section className='bg-allotrix-bg text-allotrix-text w-full flex flex-col items-center font-allotrix-font-secondary'>
          <motion.div {...animations.left} className='flex flex-col items-center gap-10 mt-40 w-full'>
              <h2 className='md:text-5xl text-3xl mx-6 md:p-2 text-left md:text-center'>
                Which one are you looking for ?
              </h2>
          </motion.div>
          <motion.div {...animations.left}className='flex flex-col items-center gap-10 mt-10 mb-24 w-full'>
            <LinkBox title={'Allotrix'} description={'Ultimate automation in one click.'} link = {"/getallotrix/download"} />
            <LinkBox title={'Automation Solutions'} description={'Get individual tools for cheaper rates.'} link = {"/getallotrix/otherProducts"} />
            </motion.div>
      </section>
    </>
  )
}

export default GetAllotrix;

