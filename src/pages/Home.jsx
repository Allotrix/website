import React, { useContext, useRef } from 'react';
import { CLIENTS, FEATURES, USERS } from '../lib/constants';
import { animate, motion } from 'framer-motion';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFileAlt, FaLongArrowAltRight } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import { IoMdCheckboxOutline, IoMdDownload } from "react-icons/io";
import Logo from '../assets/logo.png';
import Gif from '../assets/allotrix-gif.mp4';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import TestimonialCard from '../components/TestimonialCard';
import Popup from 'reactjs-popup';
import { AuthContext } from '../contexts/AuthContext';
import Alert from '../components/Alert';

const Home = ({ setSelectedPlan }) => {

    const context = useContext(AuthContext);
    const { user } = context;

    const brandsCount = useRef(null);

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

    const animationBrandsCount = () => {
        animate(0, 50, {
            duration: 2,
            onUpdate: (num) => brandsCount.current.textContent = num.toFixed()
        })
    }

    const TextGradientStyle = {
        '--bg-size': '400%',
        '--color-one': '#ffffff',
        '--color-two': '#F5F5F5',
        '--color-three': '#ffffff',

        fontSize: '1.5em',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, var(--color-one), var(--color-two), var(--color-three)) 0 0 / var(--bg-size) 50%',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        animation: 'move-bg 2s infinite linear',
        transition: 'ease-out 50ms'
    };
      
    const GradientAnimations = {
        right: {
            animate: {
            backgroundPosition: ['100% 0%', '0% 100%', '100% 0%']
            },
        },
    };

    return (
        <main className='bg-allotrix-bg text-allotrix-text relative overflow-hidden'>
            <motion.section {...animations.left} className='flex flex-col items-center py-24 mt-16 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4 md:pt-48'>
                <div className='h-64 w-64 bg-[#ef3f3698] absolute rounded-full md:-left-24 z-10 blur-[120px]  md:block top-96 md:top-[unset]'></div>
                <div className='h-64 w-96 bg-[#ef3f3698] absolute md:-right-24 z-10 rounded-full blur-[120px] hidden md:block'></div>
                <div className='text-4xl font-allotrix-font-secondary leading-tight z-20 md:text-5xl'>
                    <h1>
                        Make 
                        <span className='text-allotrix-std font-bold'> One-Month
                        </span> processes,
                    </h1>
                    <h1>
                        <span className='text-allotrix-std font-bold'>
                            One-Second</span> using 
                            <span className='text-allotrix-std font-bold text-[40px] md:text-5xl'> allotrix 
                        </span>
                    </h1>
                </div>
                <article className='text-[#858585] font-allotrix-font mx-8 md:mx-0 text-lg z-20 md:text-lg'>
                    Automate and upscale the MUN experience in few clicks
                </article>
                <div className='flex flex-col gap-4 md:flex-row z-20'>
                    <Link to={'/getallotrix'} className='bg-allotrix-std py-2 px-6 rounded-lg font-allotrix-font-secondary text-[white] md:text-xl' href="/">Get Allotrix</Link>
                    <a href="mailto:allotrixapp@gmail.com?subject=Meeting%20Request" className='bg-transparent py-2 px-6 rounded-lg font-allotrix-font-secondary text-[white] border-[1px] md:text-lg border-solid border-allotrix-std'>Schedule a meeting</a>
                </div>
                <aside className='text-sm font-allotrix-font-secondary text-[gray] tracking-tighter z-20'>
                    *contact us for getting personalized <span><a className='underline' href='#pricing'>pricing</a></span>
                </aside>
            </motion.section>
            <section id='milestones' className='flex flex-col items-center text-center mt-10 gap-10 md:items-start md:text-left md:px-32 md:gap-10'>
                <motion.article {...animations.left} transition={{ delay: 0.2}} className='flex flex-col gap-2'>
                    <h2 className='font-allotrix-font-secondary mx-8 text-allotrix-text text-xl md:mx-0 md:text-3xl'>
                        Allotrix was able to achieve milestones in just 4 months!
                    </h2>
                    <p className='font-allotrix-font mx-6 text-sm md:mx-0 md:text-lg font-extralight'>
                        Allotrix is backed by a team of achievers with vision.
                    </p>
                </motion.article>
                <aside className='flex flex-col gap-4 md:flex-row md:justify-center md:w-full'>
                    <motion.div {...animations.left} className='w-[290px] h-[256px] bg-allotrix-std rounded-2xl lg:w-[400px] lg:h-[300px]'>
                    <video src={Gif} autoPlay muted loop>
                        Your browser does not support the video.
                    </video>
                    </motion.div>
                    <div className='flex flex-col gap-2 mb-24'>
                        <motion.article {...animations.right} transition={{ delay: 0.2}}  className='w-[290px] h-[80px] text-sm md:text-lg grid items-center text-center bg-allotrix-bg rounded-2xl lg:w-[400px] lg:h-[95px] border-[1px] border-solid border-allotrix-std'>
                            <h5 style={{ ...TextGradientStyle, ...GradientAnimations.right.animate }}>
                                3 seconds per allotment
                            </h5>
                        </motion.article>
                        <motion.article {...animations.right} transition={{ delay: 0.3}} className='w-[290px] h-[80px] text-sm md:text-lg grid items-center text-center bg-allotrix-bg rounded-2xl lg:w-[400px] lg:h-[95px] border-[1px] border-solid border-allotrix-std'>
                            <h5 style={{ ...TextGradientStyle, ...GradientAnimations.right.animate }}>
                                1000+ delegates alloted
                            </h5>
                        </motion.article>
                        <motion.article {...animations.right} transition={{ delay: 0.4}}>
                            <a href={'/team'} className='w-[290px] h-[80px] grid items-center text-md md:text-lg text-center bg-allotrix-std rounded-2xl lg:w-[400px] lg:h-[95px] border-[1px] border-solid text-allotrix-bg border-allotrix-std'>
                                <h5 style={{ ...TextGradientStyle, ...GradientAnimations.right.animate }}>
                                    About the team
                                </h5>
                            </a>
                        </motion.article>
                    </div>
                </aside>
            </section>
            <section id='clients' className='w-full bg-[#252526] h-[100px] flex items-center mb-24'>
                <div className='w-full md:w-[75%] overflow-hidden flex after:content[""] after:dark:from-brand-dark after:from-background after:bg-gradient-to-l after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:absolute before:content[""] before:dark:from-brand-dark before:from-background before:bg-gradient-to-r before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:absolute'>
                    {
                        
                        [...Array(2)].map((arr, i) => (
                            <div key={i} className='flex flex-nowrap animate-slide'>
                                {
                                    CLIENTS.map((client) => (
                                        <div key={client.alt} className='relative w-[200px] m-10 shrink-0 flex items-center'>
                                            <img src={client.logo} alt={client.alt} className='object-contain max-w-none w-[200px]' />
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <aside className='hidden font-allotrix-font md:block px-4'>
                    <h3 className='text-3xl'>
                        Over <motion.span whileInView={animationBrandsCount} viewport={{ once: true }} ref={brandsCount}></motion.span>+
                    </h3>
                    <p className='text-md'>
                        MUN organizers trust <span className='text-allotrix-std font-semibold tracking-wide'>allotrix</span>
                    </p>
                </aside>
            </section>
            <section className='flex flex-col items-center text-center gap-10 md:items-start md:text-left md:px-32 md:gap-10 mb-24 relative'>
                <div className='h-64 w-64 md:w-[500px] bg-[#ef3f3698] absolute rounded-full right-64 blur-[120px] md:left-[unset] md:top-64 left-24 top-80'></div>
                <div className='w-full'>
                    <h2 className='md:text-4xl text-center text-xl font-allotrix-font-secondary font-bold'>
                        What Problems Are We Solving?
                    </h2>
                </div>
                <div className='w-full flex flex-col items-center md:flex-row gap-6 mt-10 md:justify-center md:gap-10 z-10'>
                    <motion.aside {...animations.left} className={`h-[500px] relative w-[300px] md:w-[350px] bg-allotrix-bg rounded-xl custom-cursor1 font-allotrix-font p-4 text-lg flex flex-col gap-2 items-center justify-between`}>
                        <h3 className='font-extralight text-md'>
                            Without Allotrix
                        </h3>
                        <article className='my-6'>
                            <ul className='flex flex-col gap-3 text-md text-left'>
                                <li className='flex gap-2 items-center'>
                                    <p className='text-3xl text-allotrix-std rotate-45'>
                                        <TiLocationArrow />
                                    </p>
                                    Tedious paperwork
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <p className='text-3xl text-allotrix-std rotate-45'>
                                        <TiLocationArrow />
                                    </p>
                                    Hours of manual labour
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <p className='text-3xl text-allotrix-std rotate-45'>
                                        <TiLocationArrow />
                                    </p>
                                    Wrong pertinence allotment
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <p className='text-3xl text-allotrix-std rotate-45'>
                                        <TiLocationArrow />
                                    </p>
                                    Increased chances of Human Error
                                </li>
                            </ul>
                        </article>
                        <aside className='w-full '>
                            <a href='/getAllotrix/otherProducts' className='flex justify-between items-center border border-[#252526] text-[##252526] w-full rounded-lg p-3'>
                                Join Discord
                                <FaLongArrowAltRight />
                            </a>
                        </aside>
                    </motion.aside>
                    <motion.aside {...animations.right} className={`h-[500px] w-[300px] md:w-[350px] bg-[#252526] custom-cursor2 rounded-xl font-allotrix-font p-4 justify-between text-lg border-[1px] border-solid border-allotrix-std flex flex-col gap-2 items-center`}>
                        <h3 className='font-extralight text-md'>
                            With Allotrix
                        </h3>
                        <article className='my-6'>
                            <ul className='flex flex-col gap-3 text-md text-left'>
                                <li className='flex gap-2 items-center'>
                                    <p className='text-3xl text-[#39AB27]'>
                                        <IoMdCheckboxOutline />
                                    </p>
                                    Streamlined registration process with a single click
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <p className='text-3xl text-[#39AB27]'>
                                        <IoMdCheckboxOutline />
                                    </p>
                                    Efficient automation from start to finish 
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <p className='text-3xl text-[#39AB27]'>
                                        <IoMdCheckboxOutline />   
                                    </p>
                                    Eliminates the need for extensive back-and-forth with delegates
                                </li>
                            </ul>
                        </article>
                        <aside className='w-full '>
                            <a href={'/getallotrix'} className='flex justify-center gap-2 items-center border border-[#252526] text-[##252526] w-full rounded-lg p-3'>
                                Get Allotrix
                                <IoMdDownload />
                            </a>
                        </aside>
                    </motion.aside>
                </div>
            </section>
            <section id='whyallotrix' className='flex flex-col items-center gap-10 md:items-start md:text-left md:px-32 md:gap-10 mb-10 relative bg-gradient-to-b from-[#1E1E1E] to-transparent py-24'>
                <motion.div {...animations.up} transition={{ delay: 0.2}} className='flex flex-col gap-4 md:flex-row md:justify-center md:w-full'>
                    <div className='bg-[#ef3f3638] rounded-2xl w-[320px] h-[370px] border-[1px] border-solid border-allotrix-bg p-10 font-allotrix-font-secondary'>
                        <h2 className='text-5xl font-extrabold mb-6'>
                            Why Choose 
                            <span className='flex items-center gap-3'>
                                <img className='w-[170px]' src={Logo} alt='allotrix' /> ?
                            </span>
                        </h2>
                        <p className='leading-5 text-sm text-justify'>
                            Allotrix saves time and stress with automated, fair, and transparent delegate assignments for conferences. Boost engagement and data-driven insights with a customizable platform built for efficiency.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6 mb-24 z-20'>
                        {
                            FEATURES.map((feature, i) => (
                                <Accordion key={i} img={feature.img} title={feature.title} content={feature.content} />
                            ))
                        }
                    </div>
                </motion.div>
                <motion.div {...animations.up} transition={{ delay: 0.2}} className='flex flex-col items-center gap-4 w-full relative md:static'>
                    <div className='h-64 w-96 bg-[#ef3f3698] absolute -top-32 md:top-96 md:-right-24 z-10 rounded-full blur-[150px] md:block'></div>
                    <h2 className='md:text-4xl text-center text-xl font-allotrix-font-secondary font-bold z-20'>
                        Easy MUN-ing With Allotrix
                    </h2>
                    <aside className='flex flex-col md:flex-row font-allotrix-font-secondary text[#FFD4D4] gap-6 md:gap-2 z-20'>
                        <div className='w-[300px] h-[230px] bg-[#ef3f3638] p-4 text-center rounded-xl relative text-allotrix-text'>
                            <h3 className='text-xl mb-6 flex gap-2 items-center justify-center'>
                                <IoCheckmarkDoneSharp />
                                Smart Allotments
                            </h3>
                            <p className='text-md px-4'>
                                Allotrix uses a sophisticated algorithm to make accurate allotments, even for large MUNs with thousands of delegates.
                            </p>
                            <a className='bg-allotrix-std py-2 px-6 rounded-lg absolute md:-bottom-14 -bottom-[570px] md:left-0 left-20 font-allotrix-font-secondary text-[white] md:text-xl' href="/getallotrix">
                                Get Allotrix
                            </a>
                        </div>
                        <div className='w-[300px] h-[230px] bg-[#ef3f363f] p-4 text-center rounded-xl text-allotrix-text'>
                            <h3 className='text-xl mb-6 flex gap-2 items-center justify-center'>
                                <MdOutlineAlternateEmail />
                                Emailing
                            </h3>
                            <p className='text-md px-4'>
                                Allotrix can automatically send emails to delegates with their allotment information and other important tournament details.
                            </p>
                        </div>
                        <div className='w-[300px] h-[230px] bg-[#ef3f363f] p-4 text-center rounded-xl text-allotrix-text'>
                            <h3 className='text-xl mb-6 flex gap-2 items-center justify-center'>
                                <FaFileAlt />
                                Reporting & Analysis
                            </h3>
                            <p className='text-md px-4'>
                                Allotrix provides detailed insights into your tournament data, so you can make informed decisions about future events all for free!
                            </p>
                        </div>
                    </aside>
                </motion.div>
            </section>
            <motion.section id='testimonials' {...animations.up} transition={{ delay: 0.6 }} className='relative mb-24'>
                <div className='w-full'>
                    <h2 className='md:text-4xl text-center text-xl font-allotrix-font-secondary font-bold'>
                        Testimonials
                    </h2>
                </div>
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
                                        <TestimonialCard key={index} name={testimonial.name} designation={testimonial.designation}  message={testimonial.message} img={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png'} />
                                    ))
                                }
                        </div>
                    ))
                }
                </div>
            </motion.section>
            <section id='pricing' className='flex flex-col items-center gap-10 md:items-start md:text-left md:px-32 md:gap-10 mb-24 relative'>
                <div className='w-full'>
                    <h2 className='md:text-4xl text-center text-xl font-allotrix-font-secondary font-bold'>
                        Pricing
                    </h2>
                </div>
                <div className='w-full text-[white] flex flex-col items-center md:flex-row gap-6 mt-10 md:justify-center md:gap-10 z-10'>
                    <motion.aside {...animations.up} className='h-[400px] w-[250px] bg-allotrix-bg rounded-xl font-allotrix-font p-4 text-lg flex flex-col gap-2 items-start border-2 border-solid border-allotrix-std'>
                        <div>
                            <h2 className='font-bold text-4xl'>
                                Free
                            </h2>
                            <p className='text-[gray] text-sm mt-3'>
                                Trial version to get familiar with Allotrix.
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h5 className='font-bold text-2xl'>
                                INR 0
                            </h5>
                            <p className='text-[gray] text-sm mt-3'>
                                Free up-to 60
                                <p>
                                    allotments
                                </p>
                            </p>
                        </div>
                        {
                            user ? (
                                <Link onClick={() => setSelectedPlan("Free")} className='bg-allotrix-std rounded-md px-6 py-2 mx-auto mt-20' to={'/getAllotrix/download/payment'}>
                                    View Details
                                </Link>
                            ) : (
                                <Popup overlayStyle={{background: 'rgba(0, 0, 0, .5)'}} trigger={<button className='bg-allotrix-std rounded-md px-6 py-2 mx-auto mt-20'>View Details</button>} modal nested>
                                    {
                                        (close) => (
                                            <Alert message={"Login to your account to download Allotrix"} onclick = {() => close()} />
                                        )
                                    }
                                </Popup>
                            )
                        }
                    </motion.aside>
                    <motion.aside {...animations.up} className='h-[400px] w-[250px] bg-allotrix-bg rounded-xl font-allotrix-font p-4 text-lg flex flex-col gap-2 items-start border-2 border-solid border-allotrix-std'>
                        <div>
                            <h2 className='font-bold text-4xl'>
                                Starter
                            </h2>
                            <p className='text-[gray] text-sm mt-3'>
                                Full access with all features unlocked.
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h5 className='font-bold text-2xl'>
                                INR 5,999
                            </h5>
                            <p className='text-[gray] text-sm mt-3'>
                                Needs renewal every
                                <p>
                                    MUN
                                </p>
                            </p>
                        </div>
                        {
                            user ? (
                                <Link onClick={() => setSelectedPlan("Starter")} className='bg-allotrix-std rounded-md px-6 py-2 mx-auto mt-20' to={'/getAllotrix/download/payment'}>
                                    View Details
                                </Link>
                            ) : (
                                <Popup overlayStyle={{background: 'rgba(0, 0, 0, .5)'}} trigger={<button className='bg-allotrix-std rounded-md px-6 py-2 mx-auto mt-20'>View Details</button>} modal nested>
                                    {
                                        (close) => (
                                            <Alert message={"Login to your account to download Allotrix"} onclick = {() => close()} />
                                        )
                                    }
                                </Popup>
                            )
                        }
                    </motion.aside>
                    <motion.aside {...animations.up} className='h-[400px] w-[250px] bg-allotrix-bg rounded-xl font-allotrix-font p-4 text-lg flex flex-col gap-2 items-start border-2 border-solid border-allotrix-std'>
                        <div>
                            <h2 className='font-bold text-4xl'>
                                Premium
                            </h2>
                            <p className='text-[gray] text-sm mt-3'>
                                Starter package with custom branding.
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h5 className='font-bold text-2xl'>
                                INR 6,999
                            </h5>
                            <p className='text-[gray] text-sm mt-3'>
                                Needs renewal every
                                <p>
                                    MUN
                                </p>
                            </p>
                        </div>
                        {
                            user ? (
                                <Link onClick={() => setSelectedPlan("Premium")} className='bg-allotrix-std rounded-md px-6 py-2 mx-auto mt-20' to={'/getAllotrix/download/payment'}>
                                    View Details
                                </Link>
                            ) : (
                                <Popup overlayStyle={{background: 'rgba(0, 0, 0, .5)'}} trigger={<button className='bg-allotrix-std rounded-md px-6 py-2 mx-auto mt-20'>View Details</button>} modal nested>
                                    {
                                        (close) => (
                                            <Alert message={"Login to your account to download Allotrix"} onclick = {() => close()} />
                                        )
                                    }
                                </Popup>
                            )
                        }
                    </motion.aside>
                    <motion.aside {...animations.up} className='h-[400px] w-[250px] bg-allotrix-bg rounded-xl font-allotrix-font p-4 text-lg flex flex-col gap-2 items-start border-2 border-solid border-allotrix-std'>
                        <div>
                            <h2 className='font-bold text-4xl'>
                                Lifetime
                            </h2>
                            <p className='text-[gray] text-sm mt-3'>
                                Premium package with life-time access.
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h5 className='font-bold text-2xl'>
                                INR 25,000
                            </h5>
                            <p className='text-[gray] text-sm mt-3'>
                                Contact sales for more 
                                <p>
                                    details
                                </p>
                            </p>
                        </div>
                        <a href='mailto:allotrixapp@gmail.com' className='bg-allotrix-std rounded-md px-6 py-2 mx-auto mt-20'>
                            Contact
                        </a>
                    </motion.aside>
                </div>
                <div className='md:self-end'>
                    <a href="/getallotrix/otherProducts" className='bg-allotrix-std py-2 px-6 rounded-lg font-allotrix-font-secondary text-[white] md:text-lg'>
                        View Other Products
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Home;

