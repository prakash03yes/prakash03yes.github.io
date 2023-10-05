import React, { useMemo, useRef } from 'react';
import { Group, Object3DEventMap, Spherical, Vector3 } from 'three';
import SphereText from './SphereText';


type Props = {
    radius: number,
    words: string[];
};

const WordsSphere: React.FC<Props> = (props) => {
    const { radius, words } = props;
    const groupRef = useRef<Group<Object3DEventMap>>(null);


    const tableTexts = useMemo(() => {
        const count = words.length;
        const spacing = 8;
        const tempWords = [];
        const gridCount = Math.ceil(Math.sqrt(count));

        for (let i = 0; i < gridCount; i++) {
            for (let j = 0; j < gridCount; j++) {
                const index = i * gridCount + j;
                if (index < count) {
                    const word = words[index];
                    const position = new Vector3(i * spacing, j * spacing, 0);
                    tempWords.push({
                        position: position,
                        text: word,
                    });
                }
            }
        }

        return tempWords;
    }, [words]);

    const sphereTexts = useMemo(() => {
        const count = words.length;
        const tempWords = [];
        const spherical = new Spherical();
        const gridCount = Math.ceil(Math.sqrt(count));

        for (let i = 0; i < gridCount; i++) {
            for (let j = 0; j < gridCount; j++) {
                const index = i * gridCount + j;
                if (index < count) {
                    const word = words[index];
                    const phi = Math.PI * (i + 0.5) / gridCount; // Distribute over phi
                    const theta = Math.PI * 2 * j / gridCount; // Distribute over theta
                    const position = new Vector3().setFromSpherical(spherical.set(radius, phi, theta));
                    tempWords.push({
                        position: position,
                        text: word
                    })
                }
            }
        }
        return tempWords;
    }, [radius, words]);


    return (
        <group ref={groupRef}>
            {sphereTexts.map(({ position, text }, index) => (
                <SphereText
                    key={index}
                    position={position}
                    text={text}
                />
            ))}
        </group>
    );
}

export default WordsSphere;
