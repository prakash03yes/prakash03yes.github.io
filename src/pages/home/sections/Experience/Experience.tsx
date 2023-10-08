import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import SkillsCanvas from './_components/SkillsGlobe/SkillsCanvas';
import WorkShitory from './_components/WorkHistory/WorkShitory';
import classes from "./Experience.module.css";
import { Container } from '@/_components/blocks';
import { useAppDispatch } from '@/store/hooks';
import { setSkillsShape } from '@/store/reducers/homeReducer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { store } from '@/store';


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
                start: "200% center",
                end: "200% center",
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
            <Container expand="full" className={clsx(['flex flex-col gap-8 py-10'], ["sm:flex-row sm:gap-4"], ["lg:py-20"])}>
                <div
                    onDoubleClick={handleOnShapeChange}
                    className={clsx(classes.canvasContainer,
                        ["h-80 px-5"], ["sm:h-auto sm:flex-70 sm:cursor-pointer sm:active:cursor-grabbing"],
                        ["lg:flex-60"]
                    )}>
                    <SkillsCanvas />
                </div>
                <WorkShitory className={clsx(["pl-5 pr-5"], ['sm:pl-0 sm:flex-30 sm:pr-10'], ["lg:flex-60 lg:my-auto"])} />
            </Container>
        </section>
    );
}

export default Experience;