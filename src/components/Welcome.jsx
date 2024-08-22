import React from "react";
import { ReactTyped } from "react-typed";

const Welcome = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:px-16 px-7 pt-20 pb-[17rem] md:pb-52 leading-none md:w-1/2" id="tentang">
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
            Kondisi kesehatan pelajar saat ini cukup mengkhawatirkan. Pihak
            Usaha Kesehatan Sekolah membuka program Gerakan Sekolah Sehat (GSS).
            ZentraHealth, turut berkontribusi aktif dalam mewujudkan program
            Gerakan Sekolah Sehat dengan menyajikan 5 fokus utama mulai dari
            Sehat Fisik, Sehat Bergizi, Sehat Imunisasi, Sehat Mental, hingga
            Sehat Lingkungan.
          </p>
          <p className="text-wrap font-medium text-lg">“Ayo! Bergerak bersama mewujudkan generasi yang sehat, kuat, cerdas, dan berkarakter!”</p>
        </div>
      </div>

      {/* <div className="w-[400px]">
        <LogoCanvas/>
      </div> */}
    </div>
  );
};

export default Welcome;
