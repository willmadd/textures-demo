import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React from "react";
import Ground from "./Ground";

type Props = {};

const Scene = (props: Props) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[50, 50, 50]} intensity={10000} />
      <spotLight position={[10, 4, -10]} intensity={300} />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <Ground />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default Scene;
