import React from 'react';
import Header from '../_layouts/Header/Header';
import Banner from './sections/Banner/Banner';
import Experience from './sections/Experience/Experience';
import Work from './sections/Work/Work';
import Contact from './sections/Contact/Contact';
import Copywrite from './sections/Copywrite/Copywrite';
import { SmoothPage } from '@/_components/blocks';


const Home: React.FC = () => {
    return (
        <>
            <Header />
            <SmoothPage>
                <main id='home'>
                    <Banner />
                    <Experience />
                    <Work />
                    <Contact />
                    <Copywrite />
                </main>
            </SmoothPage>
        </>
    );
}

export default Home;