import clsx from 'clsx';
import React from 'react';
import HistoryYesoryes from './_components/HistoryYesOrYes';
import HistorySquadhelp from './_components/HistorySquadhelp';

type Props = {
    className?: string,
};

const WorkShitory: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <div className={clsx(className, "flex flex-col gap-10")}>
            <HistoryYesoryes />
            <HistorySquadhelp />
        </div>
    );
}

export default WorkShitory;