import React from "react";
import plus from "/assets/icon/plus.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Nub1 = () => {
  return (
    <div className="w-full h-screen bg-[#FD5852] rounded-tr-[6rem]">
        <div className="static container flex items-center justify-end pt-2">
            <div className="absolute flex pr-12">
            <img src={plus} alt="" />
            </div>
        </div>
        <div className="flex flex-col p-10">
            <div className="flex flex-col pt-6 space-y-5">
                <h1 className="text-5xl text-white font-bold">Sehat Fisik</h1>
                <p className="text-white text-xl font-normal text-balance w-[600px]">
                Sebagai upaya pengurangan resiko obesitas serta meningkatkan
                kualitas kesehatan fisik peserta didik, maka perlu untuk
                dilaksanakannya aktivitas fisik secara rutin. Apa saja aktivitas
                fisik yang dapat kita upayakan di lingkungan sekolah?
                </p>
            </div>
            </div>
    </div>
  );
};

export default Nub1;
