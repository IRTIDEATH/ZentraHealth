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
    <div className="w-full h-[100vh] bg-[#FD5852] rounded-tr-[6rem]">
      <div className="static flex items-center justify-end pt-2">
        <div className="absolute flex pr-16">
          <img src={plus} alt="" className="w-[120px] h-[120px] md:w-[170px] md:h-[170px] object-contain"/>
        </div>
      </div>
      <div className="flex flex-col px-16 py-10 space-y-10">
        <div className="flex flex-col pt-12 space-y-5">
          <h1 className="md:text-5xl text-3xl text-white font-bold">
            Sehat Fisik
          </h1>
          <p className="text-white md:text-2xl text-base text-start font-normal text-wrap md:w-[480px]">
            Sebagai upaya pengurangan resiko obesitas serta meningkatkan
            kualitas kesehatan fisik peserta didik, maka perlu untuk
            dilaksanakannya aktivitas fisik secara rutin. Apa saja aktivitas
            fisik yang dapat kita upayakan di lingkungan sekolah?
          </p>
        </div>

        <div className="md:px-16 px-9 py-8 border-2 border-white rounded-2xl">
          <Accordion
            type="single"
            collapsible
            className="w-full text-[#ECFFFD]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:text-2xl text-lg">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl text-base">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="md:text-2xl text-lg">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl text-base">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
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
  );
};

export default Nub1;
