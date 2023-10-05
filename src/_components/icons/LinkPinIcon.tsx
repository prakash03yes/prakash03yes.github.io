import React from 'react';
import { _defaultIconColor, _defaultIconSize } from '@/_defaults/icons.defaults';
import { IconProps } from '@/_types/icons.types';
import { GetColorCode } from '@/_helpers/withColors';


const ArrowTopRightIcon: React.FC<IconProps> = (props) => {
    const { className = '', color = _defaultIconColor, size = _defaultIconSize } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                fill={GetColorCode(color)}
                d="M14.232 6.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
            ></path>
            <path
                fill={GetColorCode(color)}
                d="M13.603 9.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
            ></path>
        </svg>
    );
}

export default ArrowTopRightIcon;