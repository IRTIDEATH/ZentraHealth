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
                Sehat Mental
              </h1>
              <p className="text-[#1E1E1E] md:text-xl text-base text-start font-normal text-wrap md:w-[480px]">
              Mengedukasi para peserta didik dan pihak sekolah terkait pentingnya menjaga mental yang sehat di kalangan anak-anak hingga remaja. Kesehatan mental yang baik adalah kondisi ketika batin kita berada dalam keadaan tentram dan tenang, sehingga memungkinkan kita untuk menikmati kehidupan sehari-hari. Orang yang kesehatan mentalnya terganggu akan mengalami gangguan suasana hati, kemampuan berpikir, serta kendali emosi yang bisa mengarah pada perilaku buruk.
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
                Stress
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                Keadaan ketika seseorang mengalami tekanan yang sangat berat, baik secara emosi maupun mental. Seseorang yang stres biasanya akan tampak gelisah, cemas, dan mudah tersinggung. Penyebab stres :
                <br />
                ● Gangguan tidur <br />
                ● Kelelahan <br />
                ● Hipertensi <br />
                ● Kurangnya kendali emosi <br />
                ● Gangguan jantung
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-[#1E1E1E]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                Gangguan Kecemasan
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                ketika seseorang mengalami rasa cemas berlebihan secara konstan dan sulit dikendalikan, sehingga berdampak buruk terhadap kehidupan sehari-harinya.
                Penyebab gangguan kecemasan : <br />
                ● Sulit tidur <br />
                ● Badan gemetar <br />
                ● Jantung berdebar <br />
                ● Lelah <br />
                ● Pusing  
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-[#1E1E1E]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                Depresi
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                Merupakan suasana hati yang menyebabkan penderitanya terus-menerus merasa sedih.perasaan sedih pada depresi bisa berlangsung hingga berminggu-minggu atau berbulan-bulan. Penyebab depresi :<br />
                ● Terus-menerus merasa sedih, bahkan terus-menerus menangis.<br />
                ● Merasa sangat bersalah dan khawatir berlebihan.<br />
                ● Tidak dapat menikmati hidup karena kehilangan rasa percaya diri.<br />
                ● Sulit membuat keputusan dan mudah tersinggung.<br />
                ● Tidak acuh terhadap orang lain.<br />
                ● Memiliki pikiran untuk menyakiti diri sendiri atau bunuh diri.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b border-[#1E1E1E]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                Gangguan Kecemasan
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                <img src="/public/assets/content/sehatmental.svg" alt="" srcset="" />
                  <a href="https://data.goodstats.id/statistic/1-dari-3-remaja-indonesia-alami-masalah-kesehatan-mental-GkFkh" class="text-gray-500 italic">https://data.goodstats.id/statistic/1-dari-3-remaja-indonesia-alami-masalah-kesehatan-mental-GkFkh</a><br/><br/> 
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
