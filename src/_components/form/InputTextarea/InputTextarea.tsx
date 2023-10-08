import clsx from 'clsx';
import React, { ChangeEvent, FocusEvent } from 'react';
import classes from "./InputTextarea.module.css";

type Props = {
    id: string,
    label: string,
    value: string,
    className?: string,
    placeholder?: string,
    showError?: boolean,
    errorText?: string,
    enableAutoFocus?: boolean,
    onChange: (changedValue: string) => void,
    onFocus?: (e?: FocusEvent<HTMLTextAreaElement, Element>) => void,
    onBlur?: (e?: FocusEvent<HTMLTextAreaElement, Element>) => void,
};

const InputTextarea: React.FC<Props> = (props) => {
    const { id, label, value, className = '', placeholder, showError = false, errorText = "Invalid input!", enableAutoFocus = false, onChange, onFocus = null, onBlur = null } = props;

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    }
    const handleOnFocus = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
        onFocus && onFocus(e);
    }
    const handleOnBlur = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
        onBlur && onBlur(e);
    }

    return (
        <div className={clsx(className, classes.inputTextarea, showError && classes.showError)}>
            <div className={classes.inputTextarea__container}>
                <label htmlFor={id} className={classes.inputTextarea__label}>
                    {label}
                </label>
                <textarea
                    id={id}
                    rows={5}
                    className={classes.inputTextarea__input}
                    placeholder={placeholder}
                    value={value}
                    autoFocus={enableAutoFocus}
                    onChange={handleOnChange}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                />
                {showError && <span className={classes.inputTextarea__errorText}>{errorText}</span>}
            </div>
        </div>
    );
}

export default InputTextarea;