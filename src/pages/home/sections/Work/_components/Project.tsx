import clsx from 'clsx';
import React from 'react';
import classes from './Project.module.css';

type Props = {
    className?: string,
    name: string,
    src: string,
};

const Project: React.FC<Props> = (props) => {
    const { className = '', name, src } = props;

    return (
        <div className={clsx(className, classes.project)}>
            <div className={classes.project__imgWrap}>
                <img className={classes.project__img}
                    src={src}
                    alt={name}
                />
            </div>
            <div className={classes.project__hoverCnt}>
                <h3 className={classes.project__title}>{name}</h3>
            </div>
        </div>
    );
}

export default Project;