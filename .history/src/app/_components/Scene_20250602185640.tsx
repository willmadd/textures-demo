import React from "react";

type Props = {};

const Scene = (props: Props) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};

export default Scene;
