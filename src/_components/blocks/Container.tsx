import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,
    children: React.ReactNode
};

const Container: React.FC<Props> = (props) => {
    const { className = '', children } = props;

    return (
        <div className={clsx("container", className, ["px-5"])}>
            {children}
        </div>
    );
}

export default Container;