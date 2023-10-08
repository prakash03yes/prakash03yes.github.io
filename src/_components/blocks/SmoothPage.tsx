import gsap from 'gsap';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';

type Props = {
    className?: string,
    children: React.ReactNode
};

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothPage: React.FC<Props> = (props) => {
    const { className = '', children } = props;
    const pageRef = useRef<HTMLDivElement>(null);
    const smoother = useRef<ScrollSmoother>();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            smoother.current = ScrollSmoother.create({
                smooth: 2,
                effects: true,
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
            });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className={className} id="smooth-wrapper" ref={pageRef}>
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
}

export default SmoothPage;