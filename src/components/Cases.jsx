import React from "react";
import { ExpandableCardDemo } from "./ui/Card";

const Cases = () => {
  return (
    <div className="w-full bg-[#FD5852] pt-[55rem] md:pt-[20rem]">
      <div className="flex items-center justify-center pt-2">
        <div className="absolute w-full px-6 md:px-16">
          <div className="bg-[#ECFFFD] flex flex-col items-center rounded-3xl">
            <h1 className="text-[#FD5852] text-2xl font-bold py-6">Masalah <span className="text-[#1E1E1E]">Kesehatan</span></h1>
            <ExpandableCardDemo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
