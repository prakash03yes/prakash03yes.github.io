import { LinkButton } from '@/_components/form';
import { ArrowTopRightIcon, CircleIcon, LinkPinIcon } from '@/_components/icons';
import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,

};

const WorkShitory: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (

        <div className="flex flex-col">
            <div className="flex flex-col">
                <h3 className={clsx(["font-600 text-sm text-gray600"])}>2020 - Present</h3>
                <div className="flex flex-col">
                    <LinkButton
                        id='YESORYES_LINK'
                        href={'#'}
                        className={clsx(['flex items-center gap-4', 'font-600 text-sm text-white'])}
                    >
                        <span>Lead - Developer</span>
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

            <div className="flex flex-col">
                <h3 className={clsx(["font-600 text-sm text-gray600"])}>2019 - 2020</h3>
                <div className="flex flex-col">
                    <LinkButton
                        id='YESORYES_LINK'
                        href={'#'}
                        className={clsx(['flex items-center gap-4', 'font-600 text-sm text-white'])}
                    >
                        <span>Creative Logo Designer</span>
                        <span className="flex items-center gap-1">
                            <CircleIcon size={8} />
                            <span>Squadhelp</span>
                            <ArrowTopRightIcon />
                        </span>
                    </LinkButton>
                    <p className={clsx(["font-400 text-sm text-gray800 mt-4"])}>
                        Design various types of Logos for various types of clients.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WorkShitory;