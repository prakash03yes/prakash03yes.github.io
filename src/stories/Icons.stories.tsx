// Icons.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import { CallIcon } from '@/_components/icons/index';
import * as Icons from '@/_components/icons/index';



const meta: Meta<typeof CallIcon> = {
    title: 'components/Icons',
    component: CallIcon,
};

export default meta;

type Story = StoryObj<typeof CallIcon>;




export const SocialIcons: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {
                (Object.keys(Icons) as (keyof typeof Icons)[])
                    .map((Icon, i) => {
                        const IconElem = Icons[Icon];
                        return <IconElem key={i} {...args} />
                    })
            }
        </div>
    ),
    args: {
        color: "primaryBlack"
    }
};


