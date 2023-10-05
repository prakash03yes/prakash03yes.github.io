import React from 'react';
import WordsSphere from './_components/WordsSphere';
import { SKILLS } from '@/_constants/skills.cont';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Colors } from '@/_constants/colors.const';


type Props = {
  className?: string,

};

const SkillsCanvas: React.FC<Props> = (props) => {
  const { className = '' } = props;

  return (
    <Canvas className={className} camera={{ position: [0, 0, 35], fov: 90 }}>
      <color attach="background" args={[Colors.grayDark]} />
      <OrbitControls enableZoom={false} />
      <WordsSphere radius={20} words={SKILLS} />
    </Canvas>
  );
}

export default SkillsCanvas;