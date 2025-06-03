import React, { useMemo } from "react";
import * as THREE from "three";
import { Mesh } from "@react-three/fiber";

type WallSegment = {
  start: { x: number; y: number; z: number };
  end: { x: number; y: number; z: number };
  openings?: { bottom: number; top: number; left: number; right: number }[];
};

const wallsData: WallSegment[] = [
  {
    start: { x: -2, y: 0, z: -2 },
    end: { x: 2, y: 0, z: -2 },
    openings: [{ bottom: 1, top: 2, left: -0.5, right: 0.5 }],
  },
  {
    start: { x: 2, y: 0, z: -2 },
    end: { x: 2, y: 0, z: 2 },
  },
  {
    start: { x: 2, y: 0, z: 2 },
    end: { x: -2, y: 0, z: 2 },
  },
  {
    start: { x: -2, y: 0, z: 2 },
    end: { x: -2, y: 0, z: -2 },
    openings: [{ bottom: 0.5, top: 1.5, left: -1, right: 1 }],
  },
];

const wallHeight = 2.5;
const thickness = 0.1;

const Walls = () => {
  return (
    <>
      {wallsData.map((wall, idx) => {
        const geometry = useMemo(() => {
          const dx = wall.end.x - wall.start.x;
          const dz = wall.end.z - wall.start.z;
          const length = Math.hypot(dx, dz);
          const angle = Math.atan2(dz, dx);

          // Shape in local 2D space
          const shape = new THREE.Shape();
          shape.moveTo(0, 0);
          shape.lineTo(length, 0);
          shape.lineTo(length, wallHeight);
          shape.lineTo(0, wallHeight);
          shape.lineTo(0, 0);

          // Add window holes if any
          wall.openings?.forEach((win) => {
            const hole = new THREE.Path();
            hole.moveTo(win.left, win.bottom);
            hole.lineTo(win.right, win.bottom);
            hole.lineTo(win.right, win.top);
            hole.lineTo(win.left, win.top);
            hole.lineTo(win.left, win.bottom);
            shape.holes.push(hole);
          });

          const extrudeSettings: THREE.ExtrudeGeometryOptions = {
            depth: thickness,
            bevelEnabled: false,
          };

          const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
          geo.rotateY(-angle);
          geo.translate(wall.start.x, wall.start.y, wall.start.z);
          return geo;
        }, [wall]);

        return (
          <mesh key={idx} geometry={geometry}>
            <meshStandardMaterial color="#ccc" />
          </mesh>
        );
      })}
    </>
  );
};

export default Walls;
