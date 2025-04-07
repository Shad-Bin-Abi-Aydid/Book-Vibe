import React from 'react';
import Banner from './Banner';
import Books from './Books';

const Home = () => {
    return (
        <div className='text-center'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;