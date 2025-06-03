import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React from "react";
import Ground from "./Ground";
import Walls from "./Walls";

type Props = {};

const Scene = (props: Props) => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[50, 50, 50]} intensity={10000} />
      <spotLight position={[30, 14, -20]} intensity={300} />
      <directionalLight position={[10, 20, 10]} intensity={1} castShadow />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <Ground />
      <Walls />
    </>
  );
};

export default Scene;
