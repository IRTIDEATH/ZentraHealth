// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import logos from "/3d/logo.glb";

// import CanvasLoader from "./Loader";

// const Logoss = ({ isMobile }) => {
//   const logoo = useGLTF(logos);

//   return (
//     <mesh>
//         <ambientLight intensity={1.8} />
//         <directionalLight position={[0, 5, 5]} />
//       <primitive
//         object={logoo.scene}
//         key={logoo}
//         scale={isMobile ? 1.3 : 30}
//         position={isMobile ? [0, -0, 0] : [0, -4, 0]}
//       />
//     </mesh>
//   );
// };

// const LogoCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [30, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate={true}
//           autoRotateSpeed={5}
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//           rotateSpeed={0.4}
//         />
//         <Logoss isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default LogoCanvas;
