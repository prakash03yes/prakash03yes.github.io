import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,
    expand?: "fluied" | "full",
    children: React.ReactNode
};

const Container: React.FC<Props> = (props) => {
    const { className = '', children, expand = "fluied" } = props;

    return (
        <div className={clsx(className, expand === "fluied" && "container px-5 mx-auto sm:px-10")}>
            {children}
        </div >
    );
}

export default Container;