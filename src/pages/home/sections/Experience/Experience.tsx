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
        <section id='experience' className={clsx(className, "bg-grayDark")}>
            <Container className={clsx(["py-10"])}>
                <WorkShitory />
                <div className="flex items-center justify-center">
                    <SkillsCanvas />
                </div>
            </Container>
        </section>
    );
}

export default Experience;