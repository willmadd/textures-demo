import React from "react";

type Props = {};

const Ground = (props: Props) => {
  return (
    <mesh>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Ground;
