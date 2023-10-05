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
            <path fill={GetColorCode(color)} d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"></path>
        </svg>
    );
}

export default ArrowTopRightIcon;