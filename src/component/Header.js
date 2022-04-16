import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='py-1 sticky top-0 bg-white z-20 px-2'>
                <div className="container mx-auto">
                    <div className="header-all-content flex justify-between items-center h-16">
                        <div className="logo">
                            <Link to="/"><img className='w-32' src="logo.png" alt="logo" /></Link>
                        </div>
                        <div className="header-right-content flex items-center">
                            <div className="cart-icon mr-3 md:mr-7">
                                <Link to="/checkout"><i className='bx bx-cart-alt text-xl cursor-pointer'></i></Link>
                            </div>
                            <div className="login-btn mr-3 md:mr-7">
                                <button className='font-semibold'><Link to="/login">Login</Link></button>
                            </div>
                            <div className="signup-btn ">
                                <button className='bg-rose-600 w-24 h-10 text-white rounded-3xl'><Link className='h-full justify-center flex items-center' to="/registration">Sign Up</Link></button>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;