import React from 'react';

const Singlefood = () => {
    return (
        <>
            <div className="single-food-all py-5">
                <div className="container mx-auto">
                    <div className="single-food-content place-items-center h-screen grid grid-cols-12 gap-2 px-5">
                        <div className="single-food-left order-2 md:order-1 col-span-12 md:col-span-6 lg:col-span-4">
                            <h1 className='text-4xl font-semibold'>Light Breakfast</h1>
                            <p className='mt-5 text-md text-gray-500 leading-relaxed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem delectus provident repellendus. Accusantium ea nesciunt nam soluta! Cupiditate maiores, soluta odit nulla autem quod neque nostrum explicabo recusandae! Sed, eligendi.</p>

                            <div className="price-section flex mt-8 items-center">
                                <div className="price">
                                    <h2 className='text-3xl font-semibold'>55$</h2>
                                </div>
                                <div className="price-quntity px-3 flex ml-8 border border-gray-300 rounded-3xl h-11 items-center">
                                    <p className=' w-5  font-semibold text-lg cursor-pointer'>-</p>
                                    <p className=' font-semibold text-lg w-5'>1</p>
                                    <p className=' w-5 text-rose-500 font-semibold text-lg cursor-pointer'>+</p>
                                </div>

                            </div>
                            <div className="cart-btn mt-8">
                                <button className='bg-rose-600 px-1 w-32 h-11 shadow-md text-white rounded-3xl'><i className='bx bx-cart-alt text-xl cursor-pointer'></i> Add cart </button>
                            </div>
                        </div>
                        <div className="single-food-right order-1 col-span-12 md:col-span-6 lg:col-span-8 pt-4">
                            <img className='max-h-96' src="https://i.ibb.co/pwCfY4H/breakfast1.png" alt="" />
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default Singlefood;