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
            viewBox="0 0 25 25"
            className={className}
        >
            <path
                fill={GetColorCode(color)}
                fillRule="evenodd"
                d="M17.5 6.5h-10a1 1 0 100 2h7.586l-8.293 8.293a1 1 0 101.414 1.414L16.5 9.914V17.5a1 1 0 102 0v-10a1 1 0 00-1-1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default ArrowTopRightIcon;