import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DumbellCanvas from "./canvas/Dumbell";

const Section5 = () => {
  return (
    <div className="w-full bg-[#FD5852] pb-16 md:pb-28">
      <div className="flex items-center justify-center pt-2">
        <div className="absolute flex items-center justify-center md:px-16 px-7">
          <div className="shadowbg flex flex-col p-9 rounded-3xl bg-[#ECFFFD] text-center items-center justify-center space-y-3">
            <h1 className="text-[#1E1E1E] font-bold text-2xl">
              Apa itu... <br />{" "}
              <span className="text-[#125872]">Gerakan Sekolah Sehat</span>
            </h1>
            <p className="text-[#1E1E1E] text-sm md:text-lg text-wrap">
              <span className="font-bold">Gerakan Sekolah Sehat (GSS),</span> adalah upaya bersama yang dilakukan
              secara terus-menerus terkait pentingnya penerapan Sekolah Sehat
              yang berfokus pada Sehat Bergizi, Sehat Fisik dan Sehat Imunisasi
              di satuan pendidikan. Namun, di samping itu kita juga perlu
              memperhatikan Sehat Mental dan Sehat Lingkungan sebagai faktor
              pendukung serta pelengkap Sekolah Sehat.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:px-16 px-7 pb-5 pt-56 md:pt-32 space-y-7 md:space-y-16">
        <div id="fisik" className="flex flex-col md:flex-row pt-12 items-center justify-between">
          <div className="flex flex-col space-y-5">
            <h1 className="md:text-3xl text-xl text-[#ECFFFD] font-bold">
              Sehat Fisik
            </h1>
            <p className="text-[#ECFFFD] md:text-xl text-base text-start font-normal text-wrap md:w-[480px]">
              Sebagai upaya pengurangan resiko obesitas serta meningkatkan
              kualitas kesehatan fisik peserta didik, maka perlu untuk
              dilaksanakannya aktivitas fisik secara rutin. Apa saja aktivitas
              fisik yang dapat kita upayakan di lingkungan sekolah?
            </p>
          </div>
          <div className="w-[400px] mt-6">
            <DumbellCanvas/>
          </div>
        </div>

        <div className="md:px-16 px-9 pt-5 pb-9 border-2 border-[#ECFFFD] rounded-2xl">
          <Accordion
            type="single"
            collapsible
            className="w-full text-[#ECFFFD]"
          >
            <AccordionItem value="item-1" className="border-b border-[#ECFFFD]">
              <AccordionTrigger className="md:text-xl text-base">
                Senam Bersama
              </AccordionTrigger>
              <AccordionContent className="md:text-lg text-sm">
              Kegiatan senam rutin, sangat membantu dalam penjagaan kualitas fisik peserta didik. Senam rutin idealnya dilaksanakan 1 kali dalam 1 bulan. Senam yang dilaksanakan dapat berupa Senam Kesehatan Jasmani (SKJ) maupun Senam Kreasi. Pelaksanaan senam yang dilakukan secara bersama dengan jadwal yang tertata merupakan suatu langkah yang menghemat waktu serta efektif.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-[#ECFFFD]">
              <AccordionTrigger className="md:text-xl text-base">
              4L (Lompat, Lari, Lempar, Loncat)
              </AccordionTrigger>
              <AccordionContent className="md:text-lg text-sm">
              Penerapan 4L biasanya dapat dilakukan pada saat jadwal mata pelajaran Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK). Frekuensi kegiatannya paling ideal dilaksanakan 1 kali dalam 1 pekan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-[#ECFFFD]">
              <AccordionTrigger className="md:text-xl text-base">
                Permainan Tradisional
              </AccordionTrigger>
              <AccordionContent className="md:text-lg text-sm">
              Permainan tradisional saat ini sudah terbilang sangat jarang dilaksanakan di lingkungan sekolah. Sebagai penggantinya, pihak sekolah (bisa bekerjasama dengan organisasi di sekolah) mengadakan suatu ajang kompetisi yang melibatkan aktivitas fisik. Seperti mengadakan pertandingan futsal, pertandingan basket, serta cabang olahraga lainnya.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Section5;
