import React, { useContext } from 'react';
import Logo from '../assets/logo.png';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Popup from 'reactjs-popup';

const Navbar = ({openNav, setOpenNav}) => {

    const context = useContext(AuthContext);
    const { user, handleSignOut } = context;

    return (
        <nav className={`flex flex-col items-center justify-center gap-16 fixed md:absolute ${openNav ? 'top-0': 'top-[-150%]'} left-0 h-[100vh] w-full bg-[#161616] text-allotrix-text font-bold tracking-wide transition-all duration-500 ease-in-out md:flex-row md:justify-between md:p-4 md:h-[unset] md:top-0 md:gap-0 z-50 md:px-10`}>
            <div className='md:hidden'>
                <button className='text-4xl text-[white] absolute top-6 right-4' onClick={() => setOpenNav(!openNav)}>
                    <IoCloseSharp />
                </button>
            </div>
            <div className='w-[150px]'>
                <Link to={'/'} onClick={() => setOpenNav(!openNav)}>
                    <img src={Logo} alt="allotrix" className='max-h-full max-w-full' />
                </Link>
            </div>
            <ul className='flex flex-col items-center gap-4 font-allotrix-font px-6 py-4 rounded-xl md:flex-row md:gap-10 md:py-3 md:px-8 md:h-[55px]'>
                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/" onClick={() => setOpenNav(!openNav)}>Home</Link>
                </li>
                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/updates" onClick={() => setOpenNav(!openNav)}>Updates</Link> 
                </li> 
                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/getallotrix" onClick={() => setOpenNav(!openNav)}>Shop</Link> 
                </li> 
                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/faqs" onClick={() => setOpenNav(!openNav)}>FAQs</Link> 
                </li> 
                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/contact" onClick={() => setOpenNav(!openNav)}>Contact</Link>
                </li>
            </ul>
            <div className='flex flex-col md:flex-row gap-7 items-center'>
                {
                    user ? (
                        <div className='text-allotrix-bg border-[1px] h-[50px] rounded-full w-[50px] border-solid border-allotrix-std bg-allotrix-text text-2xl'>
                            <Popup trigger={<button className='rounded-full h-full w-full flex items-center justify-center'>
                                <img className='max-h-full max-w-full rounded-full' src={user.photoURL} alt="AV" />
                            </button>}>
                                {
                                    (close) => (
                                        <aside className='rounded-md bg-[#161616] w-[100px] text-allotrix-text border border-solid border-allotrix-std flex flex-col items-center p-2 gap-2'>
                                            <p className='font-allotrix-font-secondary'>
                                                {user.displayName?.split(' ')[0]}
                                            </p>
                                            {/* <button className='hover:bg-allotrix-std w-full'>
                                                Dashboard
                                            </button> */}
                                            <button onClick={handleSignOut} className='bg-allotrix-std hover:bg-[#161616] border-allotrix-std border transition-all delay-75 ease-out border-solid w-full text-[white] rounded-md py-[5px]'>
                                                Log Out
                                            </button>
                                        </aside>
                                    )
                                }
                            </Popup>
                        </div>
                    ) : (
                        <div className='bg-allotrix-std font-light py-2 px-8 rounded-lg font-allotrix-font-secondary text-[white] transition-all duration-300 ease-out hover:bg-[#161616] border-allotrix-std border-[1px] hover:border-solid hover:border-allotrix-std'>
                            <Link to='/signup' onClick={() => setOpenNav(!openNav)}>
                                Sign up
                            </Link>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar;