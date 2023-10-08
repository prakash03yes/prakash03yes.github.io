import { SKILLS } from '@/_constants/skills.cont';
import { useMemo } from 'react';
import { Spherical, Vector3 } from 'three';


type WordProps = {
    id: string,
    spherePos: Vector3,
    tablePos: Vector3,
    text: string,
}


const useGetTexts = () => {

    const texts = useMemo(() => {
        const count = SKILLS.length;
        const tableSpacing = 15;
        const sphereRadius = 30;
        const spherical = new Spherical();
        const gridCount = Math.ceil(Math.sqrt(count));
        const halfGrid = Math.floor(gridCount / 2);
        const tempWords: WordProps[] = [];


        for (let i = 0; i < gridCount; i++) {
            for (let j = 0; j < gridCount; j++) {
                const index = i * gridCount + j;
                if (index < count) {
                    const word = SKILLS[index];

                    // tablePos starts
                    const tablePos = new Vector3((i - halfGrid) * tableSpacing, (j - halfGrid) * tableSpacing, 0);
                    // tablePos ends

                    // sphere pos starts
                    const phi = Math.PI * (i + 0.5) / gridCount; // Distribute over phi
                    const theta = Math.PI * 2 * j / gridCount; // Distribute over theta
                    const spherePos = new Vector3().setFromSpherical(spherical.set(sphereRadius, phi, theta));
                    // sphere pos ends

                    tempWords.push({
                        id: `${index}`,
                        tablePos: tablePos,
                        spherePos: spherePos,
                        text: word,
                    });
                }
            }
        }

        return tempWords;
    }, []);


    return {
        texts
    };
}

export default useGetTexts;