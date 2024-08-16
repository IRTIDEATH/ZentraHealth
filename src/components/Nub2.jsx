import React from "react";
import pluss from "/assets/icon/pluss.svg";

const Nub2 = () => {
  return (
    <div className="bg-[#FD5852] z-[-3]">
      <div className="w-full h-screen bg-[#ECFFFD] rounded-tl-[6rem]">
        <div className="static flex items-center justify-start pt-2">
          <div className="absolute flex pl-20">
            <img src={pluss} alt="" />
          </div>
        </div>
        <div className="flex flex-col-reverse p-10">
          <div className="flex flex-col pt-20 space-y-5">
            <h1 className="text-5xl text-[#1E1E1E] font-bold">Sehat Fisik</h1>
            <p className="text-[#1E1E1E] text-2xl font-normal text-balance w-[600px]">
              Sebagai upaya pengurangan resiko obesitas serta meningkatkan
              kualitas kesehatan fisik peserta didik, maka perlu untuk
              dilaksanakannya aktivitas fisik secara rutin. Apa saja aktivitas
              fisik yang dapat kita upayakan di lingkungan sekolah?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nub2;
