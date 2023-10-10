import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import React from 'react';
import Dots from './Dots';


type Props = {
    className?: string,

};

const Vibe: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <div className={clsx(className)}>
            <Canvas
                orthographic
                camera={{ zoom: 20 }}
                resize={{ polyfill: ResizeObserver }} // Allows @react-spring/three to work in Safari
            >
                <color attach="background" args={['black']} />
                <Dots />
            </Canvas>
        </div>
    );
}

export default Vibe;