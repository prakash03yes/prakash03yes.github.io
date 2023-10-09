import { Container } from '@/_components/blocks';
import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,

};

const Copywrite: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <section id="copywrite" className={clsx(className, 'bg-dark')}>
            <Container className={"flex items-center justify-center py-8"}>
                <p className={clsx("font-400 text-sm text-white text-center")}>
                    “I have not failed. I've just found 10,000 ways that wont work” , - Tomas Edison
                </p>
            </Container>
        </section>
    );
}

export default Copywrite;