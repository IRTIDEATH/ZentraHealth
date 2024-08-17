import React from "react";
import pluss from "/assets/icon/pluss.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section2 = () => {
  return (
    <div className="bg-[#FD5852]" id="mental">
      <div className="w-full bg-[#ECFFFD] md:rounded-tl-[6rem] rounded-tl-[5rem] pb-16 md:pb-28">
        <div className="flex items-center justify-start pt-2">
          <div className="absolute flex pl-16">
            <img
              src={pluss}
              alt=""
              className="w-[90px] h-[90px] md:w-[170px] md:h-[170px] object-contain shadowplus"
            />
          </div>
        </div>
        <div className="flex flex-col md:px-16 px-7 py-5 space-y-10">
          <div className="flex flex-col md:flex-row pt-12">
            <div className="flex flex-col space-y-5">
              <h1 className="md:text-3xl text-xl text-[#1E1E1E] font-bold">
                Sehat Fisik
              </h1>
              <p className="text-[#1E1E1E] md:text-xl text-base text-start font-normal text-wrap md:w-[480px]">
                Sebagai upaya pengurangan resiko obesitas serta meningkatkan
                kualitas kesehatan fisik peserta didik, maka perlu untuk
                dilaksanakannya aktivitas fisik secara rutin. Apa saja aktivitas
                fisik yang dapat kita upayakan di lingkungan sekolah?
              </p>
            </div>
          </div>

          <div className="md:px-16 px-9 pt-5 pb-9 border-2 border-[#1E1E1E] rounded-2xl">
            <Accordion
              type="single"
              collapsible
              className="w-full text-[#1E1E1E]"
            >
              <AccordionItem
                value="item-1"
                className="border-b border-[#1E1E1E]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-[#1E1E1E]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-[#1E1E1E]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur eius hic tenetur sapiente, saepe, enim aspernatur
                  sint at vitae possimus similique ratione explicabo dolorum
                  soluta necessitatibus incidunt natus exercitationem eaque
                  facilis deserunt, perferendis harum minima iure! Quo accusamus
                  esse quas iste eveniet exercitationem laudantium dolorem eaque
                  id delectus, rem neque vitae eos quia natus asperiores
                  obcaecati accusantium dolor inventore enim? Maiores
                  accusantium quam non consectetur! Iusto itaque cum distinctio
                  inventore. Cumque quia laudantium consectetur harum accusamus?
                  Quisquam ipsam itaque accusantium quas amet, voluptas
                  nesciunt, pariatur nihil reiciendis hic neque obcaecati sit
                  nisi illum, totam ullam eius vero iste exercitationem ut.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
