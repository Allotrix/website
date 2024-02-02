import React from 'react';
import { TEAM } from '../lib/constants';
import { motion } from 'framer-motion';

const Team = () => {
    
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
        <main className='bg-allotrix-bg text-allotrix-text relative overflow-hidden'>
            <section className='font-allotrix-font-secondary flex flex-col items-center py-24 mt-16 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4 md:pt-48 w-full'>
                <h1 className='font-bold mb-10 text-3xl md:text-5xl text-center w-full'>
                    Meet the Team
                </h1>
                <div className='flex flex-col md:flex-row w-full items-center mt-10 gap-10'>
                    <motion.article {...animations.left} className='w-[70%]'>
                        <h3 className='text-3xl md:text-6xl font-semibold mb-4'>
                            Brains Behind 
                        </h3>
                        <h3 className='text-3xl text-[white] bg-allotrix-std py-3 px-4 md:text-5xl font-semibold text-center md:text-right md:mr-4'>
                            Allotrix
                        </h3>
                    </motion.article>
                    <motion.aside {...animations.right} className='text-lg w-[90%] text-justify'>
                        Our team, just like you, is a group of experienced MUNers who got tired of spending countless hours on manual tasks like sorting data, analysing candidates, making their allotments etc..
                    </motion.aside>
                </div>
            </section>
            <motion.section {...animations.up} id="container" className='mb-24'>
                <div className="image-container mb-24">
                    {
                        TEAM.map((member) => (
                            <>
                                <div className="img bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png')] font-allotrix-font-secondary">
                                    <div className="img-label">
                                        <h2>
                                            {member.name}
                                        </h2>
                                        <p>
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </motion.section>
        </main>
    )
}

export default Team;
