import React, { useRef } from 'react';
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Container } from '@/_components/blocks';
import { Colors } from '@/_constants/colors.const';
import StarsBackground from './_components/StarsBackground';


type Props = {
    className?: string,
};

const Banner: React.FC<Props> = (props) => {
    const { className = '' } = props;
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className={clsx(className, "relative")} id='home'>
            <Container className={clsx(["flex items-center justify-center h-screen"])}>

                <div className="absolute inset-0 w-screen h-screen">
                    <Canvas>
                        <StarsBackground containerRef={containerRef} />
                        <color attach="background" args={[Colors.dark]} />
                    </Canvas>
                </div>

                <div className={clsx("home__info relative max-w-2xl")}>
                    <h3 className='font-600 text-sm text-gray400'>
                        Hi, I am
                    </h3>
                    <h1 className='font-700 text-lg text-white'>
                        Jayaprakash.
                    </h1>
                    <p className='font-700 text-lg text-gray200'>
                        I build things for the web.
                    </p>
                    <p className='font-500 text-sm leading-loose text-gray400 mt-4'>
                        Frontend Software Engineer with a strong focus on user-centered products. <br />
                        Passinate to develop intuitive interfaces that prioritize user experience. <br />
                        Let's build something amazing together!
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default Banner;