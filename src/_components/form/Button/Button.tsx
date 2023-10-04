import clsx from 'clsx';
import React, { FocusEvent, MouseEvent } from 'react';
import classes from './Button.module.css';

type Props = {
    id: string,
    label: string,
    className?: string,
    color?: "primary" | "teritary",
    onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
    onFocus?: (e?: FocusEvent<HTMLButtonElement, Element>) => void,
    onBlur?: (e?: FocusEvent<HTMLButtonElement, Element>) => void,
};

const Button: React.FC<Props> = (props) => {
    const { label, id, className = '', color = "primary", onClick, onFocus, onBlur } = props;

    const handleOnClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        onClick && onClick(e);
    }

    const handleOnFocus = (e: FocusEvent<HTMLButtonElement, Element>) => {
        onFocus && onFocus(e);
    }

    const handleOnBlur = (e: FocusEvent<HTMLButtonElement, Element>) => {
        onBlur && onBlur(e);
    }

    return (
        <button
            id={id}
            className={clsx(className, classes.btn, classes[color])}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            <span className={classes.btn__label}>{label}</span>
        </button>
    );
}

export default Button;