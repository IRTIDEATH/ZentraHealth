import React from "react";
import plus from "/assets/icon/plus.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SuntikanCanvas from "./canvas/Suntikan";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const Section1 = () => {
  const {scrollYProgress} = useScroll()

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  return (
    <div className="bg-[#ECFFFD]" id="imunisasi">
      <div className="w-full bg-[#FD5852] md:rounded-tr-[5rem] rounded-tr-[4rem] pb-16 md:pb-28">
        <div className="flex items-center justify-end">
          <div className="absolute flex pr-10 md:pr-16">
            <motion.img
              src={plus}
              alt=""
              className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] object-contain shadowplus"
              style={{rotate}}
              initial={{rotate: 0}}
              animate={{rotate}}
              transition={{duration: 0.5, ease: "easeOut"}}
            />
          </div>
        </div>
        <div className="flex flex-col md:px-16 px-7 py-12 space-y-7 md:space-y-16">
          <div className="flex flex-col md:flex-row pt-12 items-center justify-between">
            <motion.div className="flex flex-col space-y-5"
              initial={{x:-10, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.7}}
            >
              <h1 className="md:text-3xl text-xl text-[#ECFFFD] font-bold">
                Sehat Imunisasi
              </h1>
              <p className="text-[#ECFFFD] md:text-xl text-base text-start font-normal text-wrap md:w-[480px]">
                Meningkatkan capaian imunisasi peserta didik agar mendapat imunisasi dasar yang lengkap,
                Sehat Imunisasi bertujuan untuk membantu peserta didik mencapai imunisasi dasar yang lengkap.
              </p>
            </motion.div>
            <div className="w-[400px] mt-6 ml-0 md:mr-6">
              <SuntikanCanvas />
            </div>
          </div>

          <div className="md:px-16 px-9 pt-5 pb-9 border-2 border-[#ECFFFD] rounded-2xl">
            <Accordion
              type="single"
              collapsible
              className="w-full text-[#ECFFFD]"
            >
              <AccordionItem
                value="item-1"
                className="border-b border-[#ECFFFD]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                  Mengenal Imunisasi
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                  Imunisasi adalah suatu upaya untuk menimbulkan/meningkatkan kekebalan seseorang secara aktif terhadap suatu penyakit sehingga bila suatu saat terpajan dengan penyakit tersebut tidak akan sakit atau hanya mengalami sakit ringan. Penyakit tersebut dikenal sebagai Penyakit-penyakit yang Dapat Dicegah Dengan Imunisasi (PD3I).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-[#ECFFFD]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                  Bulan Imunisasi
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                  Bulan Imunisasi Anak Sekolah adalah kegiatan nasional meliputi pemberian imunisasi pada anak usia SD/MI/bentuk lain yang sederajat yang dilaksanakan dua kali setahun setiap bulan Agustus untuk imunisasi Campak Rubela dan HPV; serta pada bulan November untuk imunisasi DT dan Td.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-[#ECFFFD]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                  Sasaran, Jenis, dan Jadwal Imunisasi
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                  <span>
                    <img src="/public/assets/content/sehatimun.svg" alt="" />
                    <a href="https://ditpsd.kemdikbud.go.id/kss/wp-content/uploads/2023/05/Sasaran-Imunisasi-1-1536x864.png" className="text-gray-500 italic">https://ditpsd.kemdikbud.go.id/kss/wp-content/uploads/2023/05/Sasaran-Imunisasi-1-1536x864.png</a>
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
