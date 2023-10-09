import { appGsap, appScrollSmoother } from '@/_configs/gsap.configs';
import React, { useLayoutEffect, useRef } from 'react';

type Props = {
    className?: string,
    children: React.ReactNode
};


const SmoothPage: React.FC<Props> = (props) => {
    const { className = '', children } = props;
    const pageRef = useRef<HTMLDivElement>(null);
    const smoother = useRef<ScrollSmoother>();

    useLayoutEffect(() => {
        const ctx = appGsap.context(() => {
            smoother.current = appScrollSmoother.create({
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