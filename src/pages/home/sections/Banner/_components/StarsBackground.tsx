import { useRef } from 'react';
import { Stars } from '@react-three/drei';
import { Group, Object3DEventMap } from 'three';
import { useFrame } from '@react-three/fiber';



const StarsBackground = () => {
    const stageRef = useRef<Group<Object3DEventMap>>(null);


    useFrame((state, delta) => {
        if (!stageRef.current) return;
        stageRef.current.rotateY(delta * 0.03);
        stageRef.current.rotateZ(delta * 0.005)
    })

    return (
        <group ref={stageRef}>
            <Stars
                fade
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                speed={0.5}
            />
        </group>
    );
}

export default StarsBackground;