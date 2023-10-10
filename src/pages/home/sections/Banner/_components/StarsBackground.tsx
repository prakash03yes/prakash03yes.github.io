import { useLayoutEffect, useRef } from 'react';
import { Stars } from '@react-three/drei';
import { Group, Object3DEventMap } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


type Props = {
    containerRef: React.RefObject<HTMLDivElement>
}


gsap.registerPlugin(ScrollTrigger);
const StarsBackground = (props: Props) => {
    const { containerRef } = props;
    const { camera } = useThree();
    const stageRef = useRef<Group<Object3DEventMap>>(null);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(camera.position, {
                z: 500,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top middle",
                    markers: true,
                    pin: true,
                    scrub: 1,
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, [camera, containerRef]);




    useFrame((_state, delta) => {
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
                speed={1}
            />
        </group>
    );
}

export default StarsBackground;