import { Container } from '@/_components/blocks';
import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string,

};

const Work: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <section className={clsx(className, "bg-dark")} id="work">
            <Container className={clsx(["px-5 h-screen"])}>

            </Container>
        </section>
    );
}

export default Work;