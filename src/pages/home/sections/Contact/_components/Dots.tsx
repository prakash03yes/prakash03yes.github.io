import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferGeometry, InstancedMesh, Material, Matrix4, NormalBufferAttributes, Vector3 } from "three";



const roundedSquareWave = (t: number, delta: number, a: number, f: number) => {
    return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

const Dots: React.FC = () => {
    const ref = useRef<InstancedMesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null);
    const waveDistance = useRef(25);


    const { vec, transform, positions, distances } = useMemo(() => {
        const vec = new Vector3()
        const transform = new Matrix4()

        const positions = [...Array(10000)].map((_, i) => {
            const position = new Vector3()
            // Place in a grid
            position.x = (i % 100) - 50
            position.y = Math.floor(i / 100) - 50

            // Offset every other column (hexagonal pattern)
            position.y += (i % 2) * 0.5

            // Add some noise
            position.x += Math.random() * 0.3
            position.y += Math.random() * 0.3
            return position
        })

        // Precompute initial distances with octagonal offset
        const right = new Vector3(1, 0, 0)
        const distances = positions.map((pos) => {
            return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5
        })
        // const distances = positions.map(pos => pos.length()) // creates circle shape
        return { vec, transform, positions, distances }
    }, [])

    useFrame(({ clock }) => {
        if (!ref.current) return;
        for (let i = 0; i < 10000; ++i) {
            const dist = distances[i]

            // Distance affects the wave phase
            const t = clock.elapsedTime - dist / waveDistance.current;

            // Oscillates between -0.4 and +0.4 with period of 3.8 seconds
            const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8)

            // Scale initial position by our oscillator
            vec.copy(positions[i]).multiplyScalar(wave + 1.3)

            // Apply the Vector3 position to the Matrix4
            transform.setPosition(vec)

            // Update Matrix4 for this instance
            ref.current.setMatrixAt(i, transform)
        }
        ref.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={ref} args={[undefined, undefined, 10000]}>
            <circleGeometry args={[0.05]} />
            <meshBasicMaterial />
        </instancedMesh>
    );
}
export default Dots;