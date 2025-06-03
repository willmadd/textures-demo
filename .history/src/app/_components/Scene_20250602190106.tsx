import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React from "react";

type Props = {};

const Scene = (props: Props) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={10} />
      <spotLight position={[10, 3, -10]} intensity={30} />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};

export default Scene;
