import React from 'react';
import clsx from 'clsx';
import classes from './BurgerIcon.module.css';

type Props = {
    className?: string,
    isOpen: boolean,
    onClick: () => void
};

const BurgerIcon: React.FC<Props> = (props) => {
    const { className = '', isOpen, onClick } = props;

    return (
        <button className={clsx(className, classes.burger, isOpen && classes.opened)} onClick={onClick}>
            <span className={clsx(classes.burgerLine, classes.burgerLine1)}></span>
            <span className={clsx(classes.burgerLine, classes.burgerLine2)}></span>
            <span className={clsx(classes.burgerLine, classes.burgerLine3)}></span>
        </button>
    );
}

export default BurgerIcon;