import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import suntikans from "/3d/suntikan.glb";

import CanvasLoader from "./Loader";
import Lights from "./Lights";

const Suntikans = ({ isMobile }) => {
  const suntikan = useGLTF(suntikans);

  return (
    <mesh>
      <Lights />
      <primitive
        object={suntikan.scene}
        key={suntikan}
        scale={isMobile ? 1.7 : 2.2}
        position={isMobile ? [0, -5, 0] : [0, -4.50, 0]}
      />
    </mesh>
  );
};

const SuntikanCanvas = () => {
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
      camera={{ position: [40, 3, 5], fov: 25 }}
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
        <Suntikans isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SuntikanCanvas;
