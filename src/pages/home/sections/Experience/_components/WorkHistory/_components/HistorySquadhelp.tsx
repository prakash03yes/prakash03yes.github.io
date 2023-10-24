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
        <div className={clsx(className, ["flex flex-col"], ['lg:flex-row lg:gap-4'])}>
            <h3 className={clsx(["font-600 text-sm text-gray600 whitespace-nowrap"], ["lg:pt-0.5 lg:flex-20 lg:text-right"])}>2019 - 2020</h3>
            <div className={clsx(["flex flex-col"], ["lg:flex-80 lg:max-w-[600px]"])}>
                <LinkButton
                    id='YESORYES_LINK'
                    className={clsx(['flex items-center gap-4', 'font-600 text-sm text-white'])}
                    href={'https://squadhelp.com/'}
                >
                    <span className='whitespace-nowrap'>Logo Designer</span>
                    <span className="flex items-center gap-1">
                        <CircleIcon size={8} />
                        <span>Squadhelp</span>
                        <ArrowTopRightIcon />
                    </span>
                </LinkButton>
                <p className={clsx(["font-400 text-sm text-gray600 mt-4"])}>
                    Design various types of Logos for various types of clients.
                </p>
            </div>
        </div >
    );
}

export default HistorySquadhelp;