import React from 'react';
import { Link } from 'react-router-dom';

const Foodfilter = () => {
    return (
        <>
            <section id='food'>
                <div className="food-filter-all-content py-8">
                    <div className="filter-menu mt-8 mb-14">
                        <ul className='flex justify-center'>
                            <li className='mr-10 capitalize font-semibold text-md'>Breakfast</li>
                            <li className='mr-10 capitalize font-semibold text-md text-rose-600 underline underline-offset-4 decoration-2 '>food</li>
                            <li className='mr-10 capitalize font-semibold text-md'>Dinner</li>
                        </ul>
                    </div>

                    <div className="container mx-auto px-3">
                        <div className="food-filter-content mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                            <Link to="/singlefood">

                                <div className="food-items mt-2 text-center transition-all hover:shadow-2xl rounded-md p-5">
                                    <div className="food-image flex justify-center">
                                        <img className='max-h-72' src="https://i.ibb.co/pwCfY4H/breakfast1.png" alt="" />
                                    </div>

                                    <div className="food-discription mt-1">
                                        <h3 className='text-xl font-semibold capitalize'>Healhy Meal Plan</h3>
                                        <p className='my-2 text-lg font-normal text-gray-500'>How we dream about our future</p>
                                        <h1 className='mt-1 text-2xl font-semibold text-opacity-90'>23$</h1>
                                    </div>

                                </div>
                            </Link>
                            <div className="food-items mt-2 text-center transition-all hover:shadow-2xl rounded-md p-5">
                                <div className="food-image flex justify-center">
                                    <img className='max-h-72' src="https://i.ibb.co/pwCfY4H/breakfast1.png" alt="" />
                                </div>

                                <div className="food-discription mt-1">
                                    <h3 className='text-xl font-semibold capitalize'>Healhy Meal Plan</h3>
                                    <p className='my-2 text-lg font-normal text-gray-500'>How we dream about our future</p>
                                    <h1 className='mt-1 text-2xl font-semibold text-opacity-90'>23$</h1>
                                </div>

                            </div>
                            <div className="food-items mt-2 text-center transition-all hover:shadow-2xl rounded-md p-5">
                                <div className="food-image flex justify-center">
                                    <img className='max-h-72' src="https://i.ibb.co/pwCfY4H/breakfast1.png" alt="" />
                                </div>

                                <div className="food-discription mt-1">
                                    <h3 className='text-xl font-semibold capitalize'>Healhy Meal Plan</h3>
                                    <p className='my-2 text-lg font-normal text-gray-500'>How we dream about our future</p>
                                    <h1 className='mt-1 text-2xl font-semibold text-opacity-90'>23$</h1>
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="checkout-btn mt-16 text-center">
                        <button className='bg-neutral-400 bg-opacity-60 px-12 py-3 text-white font-semibold'>Checkout Your food</button>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Foodfilter;