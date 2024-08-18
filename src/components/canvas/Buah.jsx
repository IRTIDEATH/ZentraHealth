import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import buabua from "/3d/buabua.glb";

import CanvasLoader from "./Loader";
import Lights from "./Lights";

const Dumbells = ({ isMobile }) => {
  const dumbel = useGLTF(buabua);

  return (
    <mesh>
      <Lights />
      <primitive
        object={dumbel.scene}
        key={dumbel}
        scale={isMobile ? 1.3 : 1.7}
        position={isMobile ? [0, 0.2, 0] : [0, 1, 0]}
      />
    </mesh>
  );
};

const BuahCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={0.4}
        />
        <Dumbells isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BuahCanvas;
