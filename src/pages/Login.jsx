import React, { useContext } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import Google from '../assets/google.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {

    const context = useContext(AuthContext);
    const { handleLogin, newUser, setNewUser, handleGoogleLogin } = context;

    return (
        <main className='bg-allotrix-bg md:h-[100vh] flex flex-col md:flex-row items-center md:justify-center w-full text-allotrix-text relative overflow-hidden'>
            <section className='flex flex-col items-center pt-24 mt-16 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <article className='flex flex-col gap-6 font-allotrix-font-secondary md:w-[475px] w-full px-4'>
                    <h2 className='text-3xl md:text-5xl font-bold'>
                        Ready to <span className='text-allotrix-std'>Scale</span> your MUN?
                    </h2>
                    <p className='md:w-[330px] px-4 md:px-[unset]'>
                        Allotrix simplifies your allotments, emails, re-allotments, and more! A click of a button is all it takes
                    </p>
                    <button className='flex gap-2 w-[190px] items-center font-bold text-[white] justify-center bg-allotrix-std rounded-md py-2 px-4 mx-auto md:mx-[unset]'>
                        Visualize Allotrix 
                        <p className='font-extrabold'>
                            <MdOutlineArrowOutward />
                        </p>
                    </button>
                </article>
            </section>
            <section className='flex flex-col items-center mt-16 md:mt-0 text-center gap-10 md:items-start md:text-left md:pr-32 md:gap-4 md:pt-48 mb-24'>
                <div className='w-full flex flex-col gap-6'>
                    <h3 className='text-xl font-allotrix-font-secondary text-center text-allotrix-std font-bold'>
                        Log in to your account
                    </h3>
                    <aside className='p-4 rounded-md border-2 border-[#252526] flex flex-col gap-10 items-center'>
                        <button onClick={handleGoogleLogin} className='flex items-center gap-2 justify-center font-allotrix-font-secondary bg-[#2392F7] text-[white] rounded-md'>
                            <img className='h-[40px] w-[40px] bg-[white] p-2 rounded-s-md' src={Google} alt="G" />
                            <p className='pr-4 py-2'>
                                Continue with Google
                            </p>
                        </button>
                        <h5 className='font-bold font-allotrix-font-secondary'>
                            Or
                        </h5>
                        <form onSubmit={handleLogin} className='font-allotrix-secondary flex flex-col gap-3'>
                            <input type="email" placeholder='Email' name='email' value={newUser.email} onChange={(event) => setNewUser({ ...newUser, [event.target.name]: event.target.value})} className='px-2 py-1 outline-none border-none rounded-md w-[300px] bg-[#252526] font-allotrix-secondary' />
                            <input type="password" placeholder='Password' name='password' value={newUser.password} onChange={(event) => setNewUser({ ...newUser, [event.target.name]: event.target.value})} className='px-2 py-1 outline-none border-none rounded-md w-[300px] bg-[#252526] font-allotrix-secondary' />
                            <button type='submit' className='w-[300px] uppercase text-[white] font-allotrix-font-secondary bg-allotrix-std rounded-md py-1 px-4 mt-4'>
                                Login
                            </button>
                        </form>
                        <p className='font-allotrix-font-secondary text-sm'>
                            Don't have an Allotrix account? <Link to={'/signup'} className='text-allotrix-std'>Sign up</Link> now
                        </p>
                    </aside>
                </div>
            </section>
        </main>
    )
}

export default Login;