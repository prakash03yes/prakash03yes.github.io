import React, { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { OrbitControls as OrbitControlsProps } from 'three-stdlib'
import { useAppSelector } from '@/store/hooks';


const CustomOrbitControls: React.FC = () => {
    const controlsRef = useRef<OrbitControlsProps>(null);
    const skillsShape = useAppSelector(state => state.homeReducer.skillsShape);

    useEffect(() => {
        if (!controlsRef.current) return;
        if (skillsShape === "table") {
            controlsRef.current.reset();
        }
    }, [skillsShape])

    return <OrbitControls
        autoRotate={skillsShape === "spherical"}
        enableZoom={false}
        ref={controlsRef}
    />;
};

export default CustomOrbitControls;
