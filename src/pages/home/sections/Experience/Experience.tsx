import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,

};

const Experience: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <section id='experience' className={clsx(className, "bg-grayDark")}>
            <div className={clsx("container", [""])}>
                <div className="flex flex-col">

                </div>
            </div>
        </section>
    );
}

export default Experience;