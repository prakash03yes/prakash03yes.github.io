import clsx from 'clsx';
import React from 'react';

import HistoryYesoryes from './_components/HistoryYesoryes';
import HistorySquadhelp from './_components/HistorySquadhelp';

type Props = {
    className?: string,
};

const WorkShitory: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <div className={clsx(className, "flex flex-col gap-10")}>
            <h2 className={clsx(["font-700 text-md text-white"])}>Work Time Travel</h2>
            <HistoryYesoryes />
            <HistorySquadhelp />
        </div>
    );
}

export default WorkShitory;