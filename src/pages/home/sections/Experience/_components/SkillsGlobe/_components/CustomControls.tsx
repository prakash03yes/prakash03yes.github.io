import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { OrbitControls as OrbitControlsProps } from 'three-stdlib'

const CustomOrbitControls: React.FC = () => {
    const controlsRef = useRef<OrbitControlsProps>(null);

    return <OrbitControls autoRotate={true} enableZoom={false} ref={controlsRef} />;
};

export default CustomOrbitControls;
