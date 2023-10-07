import { LinkButton } from '@/_components/form';
import { ArrowTopRightIcon, CircleIcon, LinkPinIcon } from '@/_components/icons';
import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,

};

const HistoryYesoryes: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <div className={clsx(className, ["flex flex-col"], ['lg:flex-row lg:gap-4'])}>
            <h3 className={clsx(["font-600 text-sm text-gray600 whitespace-nowrap"], ["lg:pt-0.5 lg:flex-20 lg:text-right"])}>2020 - Present</h3>
            <div className={clsx(["flex flex-col"], ["lg:flex-80 lg:max-w-[600px]"])}>
                <LinkButton
                    id='YESORYES_LINK'
                    href={'#'}
                    className={clsx(['flex items-center gap-4', 'font-600 text-sm text-white'])}
                >
                    <span className='whitespace-nowrap'>Lead - Developer</span>
                    <span className="flex items-center gap-1">
                        <CircleIcon size={8} />
                        <span>Yesoryes</span>
                        <ArrowTopRightIcon />
                    </span>
                </LinkButton>
                <p className={clsx(["font-400 text-sm text-gray800 mt-4"])}>
                    Deliver high-quality, robust production code for a diverse array of projects for clients. Provide leadership within development department through close collaboration, knowledge shares, and mentorship.
                </p>
                <div className="flex items-center mt-4 gap-6">
                    <LinkButton
                        id='REFFERY_LINK' href='#'
                        className={clsx(["font-400 text-sm text-white", "flex items-center gap-2"])}
                    >
                        <LinkPinIcon />
                        <span>Reffery</span>
                    </LinkButton>
                    <LinkButton
                        id='REFFERY_LINK' href='#'
                        className={clsx(["font-400 text-sm text-white", "flex items-center gap-2"])}
                    >
                        <LinkPinIcon />
                        <span>Paidant</span>
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}

export default HistoryYesoryes;