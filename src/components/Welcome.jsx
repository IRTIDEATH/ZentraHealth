import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ReactTyped } from "react-typed";

// Component untuk memuat dan menampilkan model 3D GLTF
function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={2.8} />;
}

const Welcome = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="flex flex-col md:px-16 px-7 pt-20 pb-[10rem] md:pb-52 leading-none md:w-1/2" id="tentang">
        <h1 className="text-2xl md:text-4xl font-bold">
          Bersama <span className="text-[#FD5852]">ZentraHealth</span> <br />
          Wujudkan{" "}
          <span className="text-[#FD5852]">
            <ReactTyped
              loop
              strings={[
                "5s, Sehat Fisik",
                "5s, Sehat Bergizi",
                "5s, Sehat Imunisasi",
                "5s, Sehat Mental",
                "5s, Sehat Lingkungan",
              ]}
              typeSpeed={70}
              backSpeed={80}
            />
          </span>
        </h1>
        <div className="pl-5 py-2 border-l-4 border-black mt-3 text-[#1E1E1E] space-y-4">
          <p className="text-wrap leading-5 max-w-[600px] font-normal text-base">
            Kondisi kesehatan pelajar saat ini cukup mengkhawatirkan. Pihak Usaha Kesehatan Sekolah membuka program Gerakan Sekolah Sehat (GSS). ZentraHealth, turut berkontribusi aktif dalam mewujudkan program Gerakan Sekolah Sehat dengan menyajikan 5 fokus utama mulai dari Sehat Fisik, Sehat Bergizi, Sehat Imunisasi, Sehat Mental, hingga Sehat Lingkungan.
          </p>
          <p className="text-wrap font-medium text-lg">“Ayo! Bergerak bersama mewujudkan generasi yang sehat, kuat, cerdas, dan berkarakter!”</p>
        </div>
      </div>

      {/* Bagian sebelah kanan untuk asset 3D */}
      <div className="md:w-1/2 w-full h-[500px] md:h-[500px] mt-6 md:mt-0 flex items-center justify-center">
        <Canvas className="!px-1 md:!px-0"> {/* Mengurangi padding pada perangkat mobile */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} />
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={5}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            rotateSpeed={0.4}
          />
          <Model url="/3d/logo.glb" />
        </Canvas>
      </div>
    </div>
  );
};

export default Welcome;
