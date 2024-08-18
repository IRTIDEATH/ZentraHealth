import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import heartbrains from "/3d/heartbrain.glb";

import CanvasLoader from "./Loader";
import Lights from "./Lights";

const HeartBrains = ({ isMobile }) => {
  const heartbrain = useGLTF(heartbrains);

  return (
    <mesh>
      <Lights />
      <primitive
        object={heartbrain.scene}
        key={heartbrain}
        scale={isMobile ? 1.3 : 1.8}
        position={isMobile ? [0, -3, 0] : [0, -4.50, 0]}
      />
    </mesh>
  );
};

const HeartBrainCanvas = () => {
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
        <HeartBrains isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HeartBrainCanvas;
