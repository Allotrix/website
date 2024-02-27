import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { MdOutlineArrowOutward } from "react-icons/md";
import Google from '../assets/google.png';
import { Link } from 'react-router-dom';

const Signup = () => {

    const context = useContext(AuthContext);
    const { handleGoogleSignup, createUser, setCreateUser, handleSignup } = context;

    return (
        <main className='bg-allotrix-bg md:h-[100vh] flex flex-col md:flex-row items-center md:justify-center w-full text-allotrix-text relative overflow-hidden'>
            <section className='flex flex-col items-center pt-24 mt-16 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <article className='flex flex-col gap-6 font-allotrix-font-secondary md:w-[475px] w-full px-4'>
                    <h2 className='text-2xl md:text-4xl font-bold'>
                        Join others who automate their MUN using <span className='text-allotrix-std'>Allotrix</span>
                    </h2>
                    <ul className='md:w-[330px] px-4 md:px-[unset] list-disc md:pl-4 text-left'>
                        <li>
                            Easy setup & user-friendly interface
                        </li>
                        <li>
                            Free trial with core features
                        </li>
                        <li>
                            24/7 Tech support
                        </li>
                    </ul>
                    <a href='https://youtu.be/6Cc5fL5oJm4?si=tRdxsO9AR4MiFrhx' target='blank' className='flex gap-2 w-[190px] items-center font-bold text-[white] justify-center bg-allotrix-std rounded-md py-2 px-4 mx-auto md:mx-[unset]'>
                        Visualize Allotrix 
                        <p className='font-extrabold'>
                            <MdOutlineArrowOutward />
                        </p>
                    </a>
                </article>
            </section>
            <section className='flex flex-col items-center mt-16 md:mt-0 text-center gap-10 md:items-start md:text-left md:pr-32 md:gap-4 md:pt-48 mb-24'>
                <div className='w-full flex flex-col gap-6'>
                    <h3 className='text-xl font-allotrix-font-secondary text-center text-allotrix-std font-bold'>
                        Create your account
                    </h3>
                    <aside className='p-4 rounded-md border-2 border-[#252526] flex flex-col gap-10 items-center'>
                        <button className='flex items-center gap-2 justify-center font-allotrix-font-secondary bg-[#2392F7] text-[white] rounded-md w-[300px'>
                            <img className='h-[40px] w-[40px] bg-[white] p-2 rounded-s-md' src={Google} alt="G" />
                            <button onClick={handleGoogleSignup} className='pr-4 py-2'>
                                Continue with Google
                            </button>
                        </button>
                        <h5 className='font-bold font-allotrix-font-secondary'>
                            Or
                        </h5>
                        <form onSubmit={handleSignup} className='font-allotrix-secondary flex flex-col gap-3'>
                            <input type="text" placeholder='Full Name' name='name' value={createUser.name} onChange={(event) => setCreateUser({ ...createUser, [event.target.name]: event.target.value})} className='px-2 py-1 outline-none border-none rounded-md w-[300px] bg-[#252526] font-allotrix-secondary' />
                            <input type="email" placeholder='Email' name='email' value={createUser.email} onChange={(event) => setCreateUser({ ...createUser, [event.target.name]: event.target.value})} className='px-2 py-1 outline-none border-none rounded-md w-[300px] bg-[#252526] font-allotrix-secondary' />
                            <input type="password" placeholder='Password' name='password' value={createUser.password} onChange={(event) => setCreateUser({ ...createUser, [event.target.name]: event.target.value})} className='px-2 py-1 outline-none border-none rounded-md w-[300px] bg-[#252526] font-allotrix-secondary' />
                            <button type='submit' className='w-[300px] text-[white] uppercase font-allotrix-font-secondary bg-allotrix-std rounded-md py-1 px-4 mt-4'>
                                Sign up
                            </button>
                        </form>
                        <p className='font-allotrix-font-secondary text-sm'>
                            Already have an Allotrix account? <Link to={'/login'} className='text-allotrix-std'>Login</Link> here
                        </p>
                    </aside>
                </div>
            </section>
        </main>
    )
    }

export default Signup;