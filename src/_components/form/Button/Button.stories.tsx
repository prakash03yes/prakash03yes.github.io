// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ArrowTopRightIcon } from '@/_components/icons';
import Button from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        id: "Button",
        color: "primary",
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        id: "Button",
        color: "secondary",
        label: 'Button',
    },
};

export const Outlined_Primary: Story = {
    args: {
        id: "Button",
        color: "primary",
        label: 'Button',
        varient: "outlined"
    },
};

export const Outlined_Secondary: Story = {
    args: {
        id: "Button",
        color: "secondary",
        label: 'Button',
        varient: "outlined"
    },
};

export const Loading_Primary: Story = {
    args: {
        id: "Button",
        color: "primary",
        label: 'Button',
        isLoading: true,
    },
};

export const Loading_Secondary: Story = {
    args: {
        id: "Button",
        color: "secondary",
        label: 'Button',
        isLoading: true,
    },
};

export const Disabled: Story = {
    args: {
        id: "Button",
        color: "secondary",
        label: 'Button',
        idDisabled: true,
    },
};



export const StartIcon: Story = {
    args: {
        id: "Button",
        label: 'Button',
        startIcon: <ArrowTopRightIcon />
    },
};


export const EndIcon: Story = {
    args: {
        id: "Button",
        label: 'Button',
        className: "group/ctaBtn",
        endIcon: <ArrowTopRightIcon className='group-hover/ctaBtn:translate-x-1 group-hover/ctaBtn:-translate-y-1 transition-transform' />
    },
};


