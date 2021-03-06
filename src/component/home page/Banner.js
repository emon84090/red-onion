import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="banner-all-content flex justify-center items-center flex-col py-3 px-2">
                <h2 className='text-4xl font-semibold capitalize'>best food waiting for your belly</h2>
                <div className="banner-search mt-6 max-w-md  w-full relative">
                    <input placeholder='Search food items' className='placeholder:text-sm p-4 w-full text-gray-600 font-semibold h-11 outline-none rounded-3xl' type="text" name="" id="" />
                    <div className="search-btn absolute right-0 top-0">
                        <button className='bg-rose-600 w-24 h-11  text-white rounded-3xl'><a href="#food" className='w-full h-full flex justify-center items-center'>Search</a></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;