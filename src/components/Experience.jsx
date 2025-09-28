import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { Book } from "./Book";
import { zoomLevelAtom } from "./UI";
export const Experience = () => {
  const [zoomLevel] = useAtom(zoomLevelAtom);
  const { camera } = useThree();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const baseDistance = 4;
  const zoomDistance = baseDistance * (100 / zoomLevel);

  useEffect(() => {
    const direction = camera.position.clone().normalize();
    camera.position.copy(direction.multiplyScalar(zoomDistance));
    camera.lookAt(0, 0, 0);
  }, [zoomLevel, camera]);

  return (
    <>
      <Book />
      <OrbitControls 
        minDistance={1} 
        maxDistance={10} 
        enableZoom={false}
        enablePan={false}
        enableRotate={!isMobile}
        touches={{
          ONE: isMobile ? false : undefined,
          TWO: false,
          THREE: false
        }}
      />
      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};