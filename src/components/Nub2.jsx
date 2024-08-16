import React from "react";
import pluss from "/assets/icon/pluss.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Nub2 = () => {
  return (
    <div className="bg-[#FD5852] pt-40">
      <div className="w-full h-[110vh] bg-[#ECFFFD] rounded-tl-[6rem]">
        <div className="static flex items-center justify-start pt-2">
          <div className="absolute flex pl-12">
            <img src={pluss} alt="" />
          </div>
        </div>
        <div className="flex flex-col px-10 py-10">
          <div className="flex flex-col pt-12 space-y-5">
            <h1 className="md:text-5xl text-3xl text-[#1E1E1E] font-bold">
              Sehat Fisik
            </h1>
            <p className="text-[#1E1E1E] md:text-2xl text-xl text-start font-normal text-wrap md:w-[480px]">
              Sebagai upaya pengurangan resiko obesitas serta meningkatkan
              kualitas kesehatan fisik peserta didik, maka perlu untuk
              dilaksanakannya aktivitas fisik secara rutin. Apa saja aktivitas
              fisik yang dapat kita upayakan di lingkungan sekolah?
            </p>
          </div>
          <div className="md:px-16 px-9 py-8 border-2 border-[#1E1E1E] rounded-2xl mt-20">
            <Accordion
              type="single"
              collapsible
              className="w-full text-[#1E1E1E]"
            >
              <AccordionItem value="item-1" className="border-b border-[#1E1E1E]">
                <AccordionTrigger className="md:text-2xl text-lg">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="md:text-xl text-base">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-[#1E1E1E]">
                <AccordionTrigger className="md:text-2xl text-lg">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="md:text-xl text-base">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem >
              <AccordionItem value="item-3" className="border-b border-[#1E1E1E]">
                <AccordionTrigger className="md:text-2xl text-lg">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="md:text-xl text-base">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nub2;
