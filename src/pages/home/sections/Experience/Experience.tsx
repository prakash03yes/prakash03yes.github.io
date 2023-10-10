import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import SkillsCanvas from './_components/SkillsGlobe/SkillsCanvas';
import WorkShitory from './_components/WorkHistory/WorkShitory';
import { Container } from '@/_components/blocks';
import { useAppDispatch } from '@/store/hooks';
import { setSkillsShape } from '@/store/reducers/homeReducer';
import { store } from '@/store';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Props = {
    className?: string,
};

gsap.registerPlugin(ScrollTrigger);
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



    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!containerRef.current) return;
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top center",
                end: "top center",
                once: true,
                onEnter: () => {
                    console.log("first")
                    dispatch(setSkillsShape("spherical"));
                },
                markers: true,
            });
        }, containerRef);
        return () => ctx.revert();
    }, [containerRef, dispatch]);




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