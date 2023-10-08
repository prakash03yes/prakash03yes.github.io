import React from 'react';
import Header from '../_layouts/Header/Header';
import Banner from './sections/Banner/Banner';
import Experience from './sections/Experience/Experience';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';
import Copywrite from './sections/Copywrite/Copywrite';


const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main id='home'>
                <Banner />
                <Experience />
                <Work />
                <Contact />
                <Copywrite />
            </main>
        </>
    );
}

export default Home;