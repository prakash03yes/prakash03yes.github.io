import clsx from 'clsx';
import React, { ChangeEvent, FocusEvent } from 'react';
import classes from "./InputText.module.css";

type Props = {
    id: string,
    label: string,
    value: string,
    type?: "text" | "mail",
    className?: string,
    placeholder?: string,
    showError?: boolean,
    errorText?: string,
    enableAutoFocus?: boolean,
    isRequired?: boolean,
    onChange: (changedValue: string) => void,
    onFocus?: (e?: FocusEvent<HTMLInputElement, Element>) => void,
    onBlur?: (e?: FocusEvent<HTMLInputElement, Element>) => void,
};

const InputText: React.FC<Props> = (props) => {
    const { id, label, value, type = "text", isRequired = false, className = '', placeholder, showError = false, errorText = "Invalid input!", enableAutoFocus = false, onChange, onFocus = null, onBlur = null } = props;

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }
    const handleOnFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
        onFocus && onFocus(e);
    }
    const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
        onBlur && onBlur(e);
    }

    return (
        <div className={clsx(className, classes.inputText, showError && classes.showError)}>
            <div className={classes.inputText__container}>
                <label htmlFor={id} className={classes.inputText__label}>
                    {label}
                </label>
                <input
                    id={id}
                    type={type}
                    className={classes.inputText__input}
                    placeholder={placeholder}
                    value={value}
                    autoFocus={enableAutoFocus}
                    required={isRequired}
                    onChange={handleOnChange}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                />
                {showError && <span className={classes.inputText__errorText}>{errorText}</span>}
            </div>
        </div>
    );
}

export default InputText;