import React from 'react';
import clsx from 'clsx';
import StarsBackground from './components/StarsBackground';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Container } from '@/_components/blocks';



type Props = {
    className?: string,
};

const Banner: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <section className={clsx(className, "relative")} id='home'>
            <Container className={clsx(["flex items-center justify-center h-screen"])}>
                <div className="absolute inset-0 w-screen h-screen">
                    <Canvas camera={{ position: [0, 0, -500] }}>
                        <OrbitControls
                            panSpeed={0.01}
                            enableZoom={false}
                        />
                        <StarsBackground />
                        <color attach="background" args={["black"]} />
                    </Canvas>
                </div>

                <div className={clsx("home__info relative max-w-3xl")}>
                    <h3 className='font-600 text-sm text-gray600'>
                        Hi, I am
                    </h3>
                    <h1 className='font-700 text-lg text-white'>
                        Jayaprakash.
                    </h1>
                    <p className='font-700 text-lg text-gray800'>
                        I build things for the web.
                    </p>
                    <p className='font-400 text-sm text-gray800 mt-4'>
                        Frontend Software Engineer with a strong focus on user-centered products.
                        Passinate to develop intuitive interfaces that prioritize user experience. <br />
                        Let's build something amazing together!
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default Banner;