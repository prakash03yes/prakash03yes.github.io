import React, { useRef } from 'react';
import { Group, Object3DEventMap } from 'three';
import SphereText from './SphereText';
import useGetTexts from '../_hooks/useGetTexts';


const WordsSphere: React.FC = () => {
    const { texts } = useGetTexts();
    const groupRef = useRef<Group<Object3DEventMap>>(null);
    return (
        <group ref={groupRef}>
            {texts.map((text) => (
                <SphereText
                    key={text.id}
                    tablePos={text.tablePos}
                    spherePos={text.spherePos}
                    text={text.text}
                />
            ))}
        </group>
    );
}

export default WordsSphere;
