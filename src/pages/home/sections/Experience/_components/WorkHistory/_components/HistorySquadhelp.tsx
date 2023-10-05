import { LinkButton } from '@/_components/form';
import { ArrowTopRightIcon, CircleIcon } from '@/_components/icons';
import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,

};

const HistorySquadhelp: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <div className={clsx(className, ["flex flex-col"])}>
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
    );
}

export default HistorySquadhelp;