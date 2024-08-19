import React from "react";
import { ExpandableCardDemo } from "./ui/Cardex";

const Cases = () => {
  return (
    <div className="w-full bg-[#FD5852] pt-[55rem] md:pt-[20rem]">
      <div className="flex items-center justify-center">
        <div className="absolute w-full md:px-16 px-7">
          <div className="bg-[#ECFFFD] shadowbg flex flex-col items-center rounded-3xl">
            <h1 className="text-[#1E1E1E] text-2xl font-bold py-6">Masalah <span className="text-[#125872]">Kesehatan</span></h1>
            <ExpandableCardDemo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
