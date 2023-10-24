import clsx from 'clsx';
import React, { FocusEvent, MouseEvent } from 'react';
import classes from './LinkButton.module.css';

type Props = {
    id: string,
    href: string,
    className?: string,
    children: React.ReactNode,
    onClick?: (e?: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void,
    onFocus?: (e?: FocusEvent<HTMLAnchorElement, Element>) => void,
    onBlur?: (e?: FocusEvent<HTMLAnchorElement, Element>) => void,
};

const TextButton: React.FC<Props> = (props) => {
    const { id, children, href, className = '', onClick, onFocus, onBlur } = props;

    const handleOnClick = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
        onClick && onClick(e);
    }

    const handleOnFocus = (e: FocusEvent<HTMLAnchorElement, Element>) => {
        onFocus && onFocus(e);
    }

    const handleOnBlur = (e: FocusEvent<HTMLAnchorElement, Element>) => {
        onBlur && onBlur(e);
    }

    return (
        <a
            id={id}
            href={href}
            target="_blank"
            className={clsx(className, classes.link)}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            {children}
        </a>
    );
}

export default TextButton;