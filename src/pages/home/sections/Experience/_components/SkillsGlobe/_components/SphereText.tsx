import { Text } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';



type Props = {
    position: Vector3,
    text: string,
};

const SphereText: React.FC<Props> = (props) => {
    const { position, text } = props;
    const textMeshRef = useRef<Mesh>(null);

    useFrame(({ camera }) => {
        if (!textMeshRef.current) return;
        textMeshRef.current!.quaternion.copy(camera.quaternion);
    });

    return (
        <Text ref={textMeshRef} position={position}>
            {text}
        </Text>
    );
}

export default SphereText;
