import { Container } from '@/_components/blocks';
import clsx from 'clsx';
import React from 'react';
import SkillsCanvas from './_components/SkillsGlobe/SkillsCanvas';
import WorkShitory from './_components/WorkHistory/WorkShitory';

type Props = {
    className?: string,
};

const Experience: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <section
            id='experience'
            className={clsx(className, "bg-dark relative")}
        >
            <Container className={clsx(["py-16"])}>
                <div className={clsx(["flex flex-col"], ["md:flex-row"])}>
                    <WorkShitory className={clsx(['mt-8'], ["lg:flex-[0.5]"])} />
                    <div className={clsx(["w-full h-[400px]"], ["md:self-stretch md:-order-1"], ["lg:flex-[0.5]"])}>
                        <SkillsCanvas />
                    </div>
                </div>

            </Container>
        </section>
    );
}

export default Experience;