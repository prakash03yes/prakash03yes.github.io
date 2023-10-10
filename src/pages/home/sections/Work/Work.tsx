import clsx from 'clsx';
import React from 'react';
import Reffery from "./_components/Reffery";

type Props = {
    className?: string,

};

const Work: React.FC<Props> = (props) => {
    const { className = '' } = props;




    return (
        <section className={clsx(className, "bg-dark")} id="work">
            <Reffery />
        </section>
    );
}

export default Work;