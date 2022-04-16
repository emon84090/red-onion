import React from 'react';

import Banner from './home page/Banner';
import Blog from './home page/Blog';
import Foodfilter from './home page/Foodfilter';
import Footer from './home page/Footer';

const Home = () => {
    return (
        <>

            <Banner></Banner>
            <Foodfilter></Foodfilter>
            {/* <Blog></Blog> */}
            <Footer></Footer>
        </>
    );
};

export default Home;