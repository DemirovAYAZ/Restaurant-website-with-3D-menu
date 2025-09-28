import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";

export const MenuBook3D = () => {
  return (
    <section id="menu" data-section="menu-book" className="relative min-h-screen bg-black">
      <div className="absolute inset-0 z-10">
        <UI />
        <Loader />
        <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
          <group position-y={0}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>
      </div>
    </section>
  );
};
