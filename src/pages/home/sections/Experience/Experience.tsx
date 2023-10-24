import clsx from 'clsx';
import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import SkillsCanvas from './_components/SkillsGlobe/SkillsCanvas';
import WorkShitory from './_components/WorkHistory/WorkShitory';
import { store } from '@/store';
import { Container } from '@/_components/blocks';
import { useAppDispatch } from '@/store/hooks';
import { setSkillsShape } from '@/store/reducers/homeReducer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



type Props = {
    className?: string,
};

const Experience: React.FC<Props> = (props) => {
    const { className = '' } = props;
    const containerRef = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch();


    const handleOnShapeChange = () => {
        if (store.getState().homeReducer.skillsShape === "table") {
            dispatch(setSkillsShape("spherical"));
        } else {
            dispatch(setSkillsShape("table"));
        }
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: `center+=${window.innerHeight} center`,
                end: `center+=${window.innerHeight} center`,
                once: true,
                onEnter: () => {
                    dispatch(setSkillsShape("spherical"));
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);



    return (
        <section ref={containerRef} id='experience' className={clsx(className, "relative bg-base")}>
            <Container expand="full" className={clsx(['flex flex-col gap-8 pb-10 pt-4'], ["sm:flex-row sm:gap-4 sm:py-10"], ["lg:py-4"])}>
                <div
                    onClick={handleOnShapeChange}
                    className={clsx(
                        ["h-auto px-5 cursor-pointer active:cursor-grabbing"],
                        ["sm:flex-70"],
                        ["lg:flex-60 lg:min-h-[600px]"]
                    )}>
                    <SkillsCanvas />
                </div>
                <WorkShitory className={clsx(["pl-5 pr-5"], ['sm:pl-0 sm:flex-30 sm:pr-10'], ["lg:flex-60 lg:my-auto"])} />
            </Container>
        </section>
    );
}

export default Experience;