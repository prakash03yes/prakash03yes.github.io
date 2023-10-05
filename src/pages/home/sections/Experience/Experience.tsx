import { Container } from '@/_components/blocks';
import clsx from 'clsx';
import React from 'react';
import SkillsCanvas from './_components/SkillsGlobe/SkillsCanvas';

type Props = {
    className?: string,
};

const Experience: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <section id='experience' className={clsx(className, "bg-grayDark")}>
            <Container className={clsx(["py-10"])}>
                <div className="w-full h-screen">
                    <SkillsCanvas />
                </div>
            </Container>
        </section>
    );
}

export default Experience;