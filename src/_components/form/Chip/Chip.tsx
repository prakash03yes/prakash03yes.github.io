import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,
    label: string
};

const Chip: React.FC<Props> = (props) => {
    const { className = '', label } = props;

    return (
        <div className={clsx(className,
            [
                "flex items-center justify-center",
                "font-700 text-sm text-gray200 text-center",
                "px-4 py-0.5 border border-solid border-gray200 rounded-3xl"
            ])
        }>
            {label}
        </div>
    );
}

export default Chip;