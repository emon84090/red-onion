import React from 'react';
import { Link } from 'react-router-dom';
import Socialsignin from './Socialsignin';

const Registration = () => {
    return (
        <>
            <div className="registration-all-content py-11 h-screen w-full bg-rose-100 px-3">
                <div className="registration-content max-w-md w-full mx-auto  rounded-md  flex items-center h-full justify-center flex-col bg-white px-2 md:px-10">
                    <div className="logo">
                        <img className='w-48' src="logo.png" alt="" />
                    </div>

                    <form action="" className='w-full px-2 mt-8'>
                        <div className="input-field mb-3">
                            <input placeholder='Name' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="" id="" />
                        </div>
                        <div className="input-field mb-3">
                            <input placeholder='Email' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" id="" />
                        </div>
                        <div className="input-field mb-3">
                            <input placeholder='Password' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="password" name="" id="" />
                        </div>
                        <div className="input-field mb-3">
                            <input placeholder='Confirm password' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="password" name="" id="" />
                        </div>
                        <div className="input-field">
                            <input className=' cursor-pointer w-full h-11 outline-none rounded-sm placeholder:text-sm bg-rose-600   text-white' type="submit" name="" id="" value="Sign Up" />
                        </div>
                        <div className="acount-link mt-2 text-center">
                            <Link to="/login" className='text-rose-600 font-semibold'>Already have acount?</Link>
                        </div>


                    </form>

                    <Socialsignin></Socialsignin>

                </div>

            </div>
        </>
    );
};

export default Registration;