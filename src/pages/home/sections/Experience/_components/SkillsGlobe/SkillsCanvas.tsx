import React from 'react';
import WordsSphere from './_components/WordsSphere';
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
      camera={{ position: [0, 0, 50], fov: 90 }}
    >
      <color attach="background" args={[Colors.base]} />
      <CustomControls />
      <WordsSphere />
    </Canvas>
  );
}

export default SkillsCanvas;