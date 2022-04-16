import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <>
            <footer className='bg-neutral-900 py-5 text-white'>
                <div className="container mx-auto px-5">
                    <div className="footer-all-content mt-5 grid grid-cols-12 mx-5">
                        <div className="footer-left col-span-12 md:col-span-8 mt-4">
                            <Link to="/"><img className='w-28' src="logo.png" alt="" /></Link>
                        </div>
                        <div className="footer-right col-span-12 md:col-span-4">
                            <div className="footer-right-content flex md:justify-between flex-col md:flex-row">
                                <div className="footer-right-left mt-4">
                                    <ul>
                                        <li>About Online food</li>
                                        <li>Read Our Blog</li>
                                        <li>Sign up to deliver</li>
                                        <li>Add your resturent</li>

                                    </ul>
                                </div>
                                <div className="footer-right-right mt-4">
                                    <ul>
                                        <li>Get help</li>
                                        <li>Read FAQs</li>
                                        <li>View all cities</li>
                                        <li>Resturents near me</li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="footer-bottom mt-5 md:mt-16 md:flex justify-between mx-4">
                        <div className="footer-b-left ">
                            <p>copyright © {date} online food</p>
                        </div>
                        <div className="footer-b-right">
                            <ul className='md:flex'>
                                <li className='mr-4'>Privacy Policy</li>
                                <li className='mr-4'>Terms Of Use</li>
                                <li className='mr-4'>Pricing</li>
                            </ul>
                        </div>

                    </div>

                </div>



            </footer>
        </>
    );
};

export default Footer;