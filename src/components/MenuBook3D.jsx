import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";

export const MenuBook3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cameraPosition = isMobile ? [-0.5, 1, 6] : [-0.5, 1, 4];
  const cameraFov = isMobile ? 50 : 45;

  return (
    <section id="menu" data-section="menu-book" className="relative min-h-screen bg-black">
      <div className="absolute inset-0 z-10">
        <UI />
        <Loader />
        <Canvas shadows camera={{ position: cameraPosition, fov: cameraFov }}>
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
