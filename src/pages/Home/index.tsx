import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import HomeContent from '@/components/homeContent';

const Home: FC = () => {
    return (
        <div id="s1">
            <Navbar />
            <HomeContent />
        </div>
    );
};

export default Home;
