import { ColorProps } from '@/_types/colors.types';
import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,
    label: string,
    textColor?: ColorProps,
    borderColor?: ColorProps
};

const Chip: React.FC<Props> = (props) => {
    const { className = '', label, textColor = "skyBlue_500", borderColor = "skyBlue_500" } = props;

    return (
        <div className={clsx(className,
            [
                "flex items-center justify-center",
                `font-700 text-sm text-center text-${textColor} border-${borderColor}`,
                "px-4 py-0.5 border border-solid border-gray200 rounded-3xl",

            ])
        }>
            {label}
        </div>
    );
}

export default Chip;