import React from 'react';
import Header from '../_layouts/Header/Header';
import Banner from './sections/Banner/Banner';
import Experience from './sections/Experience/Experience';

const Home: React.FC = () => {

    return (
        <>
            <Header />
            <main id='home'>
                <Banner />
                <Experience />
            </main>
        </>
    );
}

export default Home;