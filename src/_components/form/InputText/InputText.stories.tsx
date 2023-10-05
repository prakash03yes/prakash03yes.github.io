// InputText.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import InputText from './InputText';

const meta: Meta<typeof InputText> = {
    component: InputText,
};

export default meta;
type Story = StoryObj<typeof InputText>;


const Template: typeof InputText = (props) => {
    const [value, setValue] = useState(props.value || "");
    const [showError, setShowError] = useState(props.showError || false);


    const handleOnChange = (changedValue: string) => {
        if (showError && changedValue.trim() !== "") setShowError(false);
        setValue(changedValue)
    }
    return (
        <InputText {...{
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
        id: "Name",
        label: "Name:",
        placeholder: "Enter your name"
    },
};

export const AutoFoucs: Story = {
    render: (args) => <Template {...args} />,
    args: {
        id: "Name",
        label: "Name:",
        placeholder: "Enter your name",
        enableAutoFocus: true,
    },
};

export const HasInput: Story = {
    render: (args) => <Template {...args} />,
    args: {
        id: "Name",
        label: "Name:",
        placeholder: "Enter your name",
        value: "Jayaprakash"
    },
};

export const Error: Story = {
    render: (args) => <Template {...args} />,
    args: {
        id: "Name",
        label: "Name:",
        placeholder: "Enter your name",
        errorText: "Please fill the field",
        showError: true,
    },
};


