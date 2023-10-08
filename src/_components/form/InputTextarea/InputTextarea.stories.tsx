// InputTextarea.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import InputTextarea from './InputTextarea';

const meta: Meta<typeof InputTextarea> = {
    component: InputTextarea,
};

export default meta;
type Story = StoryObj<typeof InputTextarea>;


const Template: typeof InputTextarea = (props) => {
    const [value, setValue] = useState(props.value || "");
    const [showError, setShowError] = useState(props.showError || false);


    const handleOnChange = (changedValue: string) => {
        if (showError && changedValue.trim() !== "") setShowError(false);
        setValue(changedValue)
    }
    return (
        <InputTextarea {...{
            ...props,
            value: value,
            showError: showError,
            onChange: handleOnChange,
        }} />
    )
}

export const Default: Story = {
    render: (args) => <Template {...args} />,
    args: {
        id: "Message",
        label: "Message:",
        placeholder: "Enter your message"
    },
};

export const AutoFoucs: Story = {
    render: (args) => <Template {...args} />,
    args: {
        id: "Message",
        label: "Message:",
        placeholder: "Enter your message",
        enableAutoFocus: true,
    },
};

export const HasInput: Story = {
    render: (args) => <Template {...args} />,
    args: {
        id: "Message",
        label: "Message:",
        placeholder: "Enter your message",
        value: "Jayaprakash"
    },
};

export const Error: Story = {
    render: (args) => <Template {...args} />,
    args: {
        id: "Message",
        label: "Message:",
        placeholder: "Enter your message",
        errorText: "Please fill the field",
        showError: true,
    },
};


