"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./_components/Scene";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
