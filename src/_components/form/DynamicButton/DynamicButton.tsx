import clsx from 'clsx';
import React, { FocusEvent, MouseEvent } from 'react';
import classes from './DynamicButton.module.css';

type Props = {
    id: string,
    className?: string,
    idDisabled: boolean,
    children: React.ReactNode,
    onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
    onFocus?: (e?: FocusEvent<HTMLButtonElement, Element>) => void,
    onBlur?: (e?: FocusEvent<HTMLButtonElement, Element>) => void,

};

const TextButton: React.FC<Props> = (props) => {
    const { id, children, className = '', idDisabled = false, onClick, onFocus, onBlur } = props;

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
            className={clsx(className, classes.btn)}
            disabled={idDisabled}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            {children}
        </button>
    );
}

export default TextButton;