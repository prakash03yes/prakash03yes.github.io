import React from 'react';
import WordsSphere from './_components/WordsSphere';
import { SKILLS } from '@/_constants/skills.cont';
import { Canvas } from '@react-three/fiber';
import { Colors } from '@/_constants/colors.const';
import CustomControls from './_components/CustomControls';





type Props = {
  className?: string,

};

const SkillsCanvas: React.FC<Props> = (props) => {
  const { className = '' } = props;

  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 45], fov: 90 }}
    >
      <color attach="background" args={[Colors.base]} />
      <CustomControls />
      <WordsSphere radius={30} words={SKILLS} />
    </Canvas>
  );
}

export default SkillsCanvas;