import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Trash from "/3d/trash.glb";

import CanvasLoader from "./Loader";
import Lights from "./Lights";

const Trashs = ({ isMobile }) => {
  const trash = useGLTF(Trash);

  return (
    <mesh>
      <Lights />
      <primitive
        object={trash.scene}
        key={trash}
        scale={isMobile ? 2.5 : 3.5}
        position={isMobile ? [0, -6, 0] : [0, -8, 0]}
      />
    </mesh>
  );
};

const TrashCanvas = () => {
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
        <Trashs isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default TrashCanvas;
