import clsx from 'clsx';
import React, { FocusEvent, FunctionComponentElement, MouseEvent } from 'react';
import classes from './Button.module.css';
import { IconProps } from '@/_types/icons.types';

type Props = {
    id: string,
    label: string,
    className?: string,
    color?: "primary" | "secondary",
    varient?: "contained" | "outlined",
    isLoading?: boolean,
    idDisabled: boolean,
    onClick?: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
    onFocus?: (e?: FocusEvent<HTMLButtonElement, Element>) => void,
    onBlur?: (e?: FocusEvent<HTMLButtonElement, Element>) => void,
    startIcon?: FunctionComponentElement<IconProps>,
    endIcon?: FunctionComponentElement<IconProps>
};

const Button: React.FC<Props> = (props) => {
    const { label, id, className = '', isLoading = false, idDisabled = false, color = "primary", varient = "contained", onClick, onFocus, onBlur, startIcon = null, endIcon = null } = props;

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
            className={clsx(
                className,
                classes.btn,
                classes[color],
                classes[varient],
                {
                    [classes.loading]: isLoading
                }
            )}
            disabled={idDisabled}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
        >
            {startIcon && <span className={clsx(classes.btn__icon, classes.btn__startIcon)}>{startIcon}</span>}
            <span className={classes.btn__label}>{label}</span>
            {endIcon && <span className={clsx(classes.btn__icon, classes.btn__endIcon)}>{endIcon}</span>}
        </button >
    );
}

export default Button;