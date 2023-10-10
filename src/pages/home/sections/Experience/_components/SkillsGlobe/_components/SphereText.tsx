import { Text } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { useAppSelector } from '@/store/hooks';
import gsap from 'gsap';





type Props = {
    tablePos: Vector3,
    spherePos: Vector3,
    text: string,
};

const SphereText: React.FC<Props> = (props) => {
    const { tablePos, spherePos, text } = props;
    const textMeshRef = useRef<Mesh>(null);
    const skillsShape = useAppSelector(state => state.homeReducer.skillsShape);

    useEffect(() => {
        if (!textMeshRef.current) return;
        if (skillsShape === "spherical") {
            gsap.to(textMeshRef.current.position, {
                x: spherePos.x,
                y: spherePos.y,
                z: spherePos.z
            })
        } else {
            gsap.to(textMeshRef.current.position, {
                x: tablePos.x,
                y: tablePos.y,
                z: tablePos.z
            })
        }
    }, [skillsShape]);

    useFrame(({ camera }) => {
        if (!textMeshRef.current) return;
        textMeshRef.current!.quaternion.copy(camera.quaternion);
    });

    return (
        <Text
            ref={textMeshRef}
            position={tablePos}
            fontSize={2}
        >
            {text}
        </Text>
    );
}

export default SphereText;
