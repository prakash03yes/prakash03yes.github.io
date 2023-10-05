// LinkButton.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ArrowTopRightIcon } from '@/_components/icons';
import DynamicButton from './LinkButton';

const meta: Meta<typeof DynamicButton> = {
    component: DynamicButton,
};

export default meta;
type Story = StoryObj<typeof DynamicButton>;

export const Default: Story = {
    args: {
        id: "DynamicButton",
        children: <span className='font-600 text-sm text-white'>DynamicButton</span>
    },
};


export const EndIcon: Story = {
    args: {
        id: "Button",
        className: "group/ctaBtn flex items-center gap-2",
        children: <>
            <span className='font-600 text-sm text-white'>DynamicButton</span>
            <ArrowTopRightIcon className='group-hover/ctaBtn:translate-x-1 group-hover/ctaBtn:-translate-y-1 transition-transform' />
        </>
    },
};


