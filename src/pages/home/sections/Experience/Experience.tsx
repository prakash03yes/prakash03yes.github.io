import { Container } from '@/_components/blocks';
import clsx from 'clsx';
import React from 'react';
import SkillsCanvas from './_components/SkillsGlobe/SkillsCanvas';
import WorkShitory from './_components/WorkHistory/WorkShitory';
import classes from "./Experience.module.css";

type Props = {
    className?: string,
};

const Experience: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <section id='experience' className={clsx(className, "relative bg-base")}>
            <Container expand="full" className={clsx(['flex flex-col gap-8 py-10'], ["sm:flex-row"], ["lg:py-20"])}>

                <div className={clsx(classes.canvasContainer,
                    ["h-80"], ["sm:h-auto sm:flex-40 sm:cursor-grab sm:active:cursor-grabbing"],
                    ["lg:h-screen lg:flex-60"]
                )}>
                    <SkillsCanvas />
                </div>
                <WorkShitory className={clsx(['sm:flex-60'], ["lg:flex-60 lg:my-auto"])} />
            </Container>
        </section>
    );
}

export default Experience;