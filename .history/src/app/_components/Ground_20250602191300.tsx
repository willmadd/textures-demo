import { useTexture } from "@react-three/drei";
import React from "react";
import albedo from "./textures/ground/wispy-grass-meadow_albedo.png";
import normal from "./textures/ground/wispy-grass-meadow_normal-ogl.png";
import roughness from "./textures/ground/wispy-grass-meadow_roughness.png";
import height from "./textures/ground/wispy-grass-meadow_height.png";
import ao from "./textures/ground/wispy-grass-meadow_ao.png";
import metallic from "./textures/ground/wispy-grass-meadow_metallic.png";

type Props = {};

const Ground = (props: Props) => {
  const [albedoMap, normalMap, roughnessMap, heightMap, aoMap, metallicMap] =
    useTexture([
      albedo.src,
      normal.src,
      roughness.src,
      height.src,
      ao.src,
      metallic.src,
    ]);

  return (
    <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        map={albedoMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        displacementMap={heightMap}
        aoMap={aoMap}
        metalnessMap={metallicMap}
      />
    </mesh>
  );
};

export default Ground;
