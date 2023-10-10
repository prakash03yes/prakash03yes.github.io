import clsx from 'clsx';
import React, { useLayoutEffect, useRef } from 'react';
import refferyImg from "@/_assets/imgs/RefferyThumbnail.png";
import { Chip } from '@/_components/form';
import { Container } from '@/_components/blocks';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


type Props = {
    className?: string,
};

gsap.registerPlugin(ScrollTrigger);
const Reffery: React.FC<Props> = (props) => {
    const { className = '' } = props;
    const refferyImgCircleRef = useRef<SVGCircleElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(refferyImgCircleRef.current, {
                r: "65%",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "center center",
                    markers: true,
                    scrub: true,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className={clsx(className, ["flex flex-col relative"], ["sm:flex-row"])}>
            <Container className={clsx("px-5 flex flex-col")}>

                <svg version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1600 1200">
                    <defs>
                        <filter id="displacementFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="150" xChannelSelector="R"
                                yChannelSelector="G" />
                        </filter>
                        <mask id="circleMask">
                            <circle ref={refferyImgCircleRef} cx="50%" cy="50%" r="0%" fill="white"
                                style={{ filter: "url(#displacementFilter)" }} />
                        </mask>
                    </defs>
                    <image className='object-cover' xlinkHref={refferyImg} width="1600" height="1200" mask="url(#circleMask)" />
                </svg>

                <div className={clsx(["sm-px-10 py-10"])}>
                    <h3 className='font-700 text-md text-white'>Reffery</h3>
                    <p className="font-500 text-basic text-gray600">
                        Reffery is a contact-based app that helps you find people with specific skills by searching through your Trusted contacts and their contacts too.
                    </p>
                    <ul className={clsx('flex flex-col gap-2 list-disc pl-4')}>
                        <li className='font-700 text-gray600 text-sm'>Crafted from the ground up.</li>
                        <li className='font-700 text-gray600 text-sm'>Masters of both front and back ends, and even publishing.</li>
                        <li className='font-700 text-gray600 text-sm'>Prototype blazed to life in just 30 days.</li>
                        <li className='font-700 text-gray600 text-sm'>MVP triumphantly achieved within a lightning-fast 60 days.</li>
                        <li className='font-700 text-gray600 text-sm'>Launched to the world in a mere 150 days</li>
                    </ul>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <Chip label="ReactJs" />
                        <Chip label="CapacitorJs" />
                        <Chip label="Ionic" />
                        <Chip label="Firebase" />
                        <Chip label="NodeJs" />
                    </div>
                </div>
            </Container>
        </section >
    );
}

export default Reffery;