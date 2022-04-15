import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='py-1'>
                <div className="container mx-auto">
                    <div className="header-all-content flex justify-between items-center h-16">
                        <div className="logo">
                            <Link to="/"><img className='w-32' src="logo.png" alt="logo" /></Link>
                        </div>
                        <div className="header-right-content flex items-center">
                            <div className="cart-icon mr-7">
                                <i className='bx bx-cart-alt text-xl cursor-pointer'></i>
                            </div>
                            <div className="login-btn mr-7">
                                <button className='font-semibold'>Login</button>
                            </div>
                            <div className="signup-btn ">
                                <button className='bg-rose-600 w-24 h-10 text-white rounded-3xl'>Sign up</button>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;