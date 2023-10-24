import clsx from 'clsx';
import React from 'react';
import Reffery from "./_components/Reffery";
import Projects from './_components/Projects';

type Props = {
    className?: string,

};

const Work: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <section className={clsx(className, "bg-dark overflow-hidden flex flex-col gap-8")} id="work">
            <Reffery />
            <Projects />
        </section>
    );
}

export default Work;