import React from 'react';

const Checkout = () => {
    return (
        <>
            <div className="checkout-all-content mt-7">
                <div className="container mx-auto">
                    <div className="checkout-content grid grid-cols-12 gap-8">
                        <div className="checkout-details col-span-8 max-w-lg w-full">
                            <h1 className='mb-2 text-3xl font-semibold'>Edit Delivery Details</h1>
                            <hr className='mb-5 h-0.5 bg-gray-400' />
                            <form action="">
                                <div className="input-field mb-3">
                                    <input readOnly value="Deliver to Door" className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-800' type="text" name="" id="" />
                                </div>
                                <div className="input-field mb-3">
                                    <input value="107 Rd no 8" className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-800' type="text" name="" id="" />
                                </div>
                                <div className="input-field mb-3">
                                    <input placeholder='Name' className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="" id="" />
                                </div>
                                <div className="input-field mb-3">
                                    <input placeholder='Business Name' className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="" id="" />
                                </div>
                                <div className="input-field mb-3">
                                    <textarea placeholder='add delivery instructor' className='p-4 resize-none w-full h-24 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' name="" id="" ></textarea>
                                </div>

                                <div className="input-field">
                                    <input className=' cursor-pointer w-full h-11 outline-none rounded-sm placeholder:text-sm bg-rose-600   text-white' type="submit" name="" id="" value="Save & Continue" />
                                </div>

                            </form>
                        </div>
                        <div className="food-cart col-span-4 mt-6 px-4">
                            <p className='my-2'>Form <span className='font-semibold'>Gulshan pieza restura</span></p>
                            <p>Arriving in 20-30 min</p>
                            <p className='mt-1'>107 Rd No 8</p>

                            <div className="cart-all-items mt-5 ">
                                <div className="cart-items bg-gray-100 px-5 py-5 rounded-md flex justify-between mt-3">
                                    <div className="cart-items-info flex items-center">
                                        <div className="image">
                                            <img className='max-h-16' src="https://i.ibb.co/pwCfY4H/breakfast1.png" alt="" />
                                        </div>
                                        <div className="information ml-4">
                                            <h3 className='font-semibold'>Butter Nann</h3>
                                            <p className='font-bold text-rose-500 text-md'>40$</p>
                                            <span className='text-sm text-gray-400'>Delivery Free</span>
                                        </div>

                                    </div>
                                    <div className="cart-items-price flex items-center">
                                        <button className='mr-1 text-md'><i className='bx bx-plus'></i></button>
                                        <div className="items-qun w-10 h-8 flex justify-center items-center bg-white rounded-md shadow-sm">
                                            <p className='font-semibold'>02</p>
                                        </div>
                                        <button className='ml-1 text-md'><i className='bx bx-minus'></i></button>
                                    </div>

                                </div>
                                <div className="cart-items bg-gray-100 px-5 py-5 rounded-md flex justify-between mt-3">
                                    <div className="cart-items-info flex items-center">
                                        <div className="image">
                                            <img className='max-h-16' src="https://i.ibb.co/pwCfY4H/breakfast1.png" alt="" />
                                        </div>
                                        <div className="information ml-4">
                                            <h3 className='font-semibold'>Butter Nann</h3>
                                            <p className='font-bold text-rose-500 text-md'>40$</p>
                                            <span className='text-sm text-gray-400'>Delivery Free</span>
                                        </div>

                                    </div>
                                    <div className="cart-items-price flex items-center">
                                        <button className='mr-1 text-md'><i className='bx bx-plus'></i></button>
                                        <div className="items-qun w-10 h-8 flex justify-center items-center bg-white rounded-md shadow-sm">
                                            <p className='font-semibold'>02</p>
                                        </div>
                                        <button className='ml-1 text-md'><i className='bx bx-minus'></i></button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Checkout;