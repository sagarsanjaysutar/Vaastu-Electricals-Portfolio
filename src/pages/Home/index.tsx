import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import HomeContent from '@/components/homeContent';
const Home: FC = () => {
    return (
        <>
            <Navbar />
            <HomeContent />
        </>
    );
};

export default Home;
