import React from "react";
import plus from "/assets/icon/plus.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TrashCanvas from "./canvas/Trash";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const Section3 = () => {
  const {scrollYProgress} = useScroll()

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  return (
    <div className="bg-[#ECFFFD]" id="lingkungan">
      <div className="w-full bg-[#FD5852] md:rounded-tr-[5rem] rounded-tr-[4rem]">
        <div className="flex items-center justify-end">
          <div className="absolute flex pr-10 md:pr-16">
            <motion.img
              src={plus}
              alt=""
              className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] object-contain shadowplus"
              style={{rotate}}
            />
          </div>
        </div>
        <div className="flex flex-col md:px-16 px-7 py-12 space-y-7 md:space-y-16">
          <div className="flex flex-col md:flex-row pt-12 items-center justify-between">
            <motion.div className="flex flex-col space-y-5"
              initial={{x:10, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.7}}
            >
              <h1 className="md:text-3xl text-xl text-white font-bold">
                Sehat Lingkungan
              </h1>
              <p className="text-white md:text-xl text-base text-start font-normal text-wrap md:w-[480px]">
              Menggalakkan perilaku hidup yang dapat membantu meningkatkan kualitas lingkungan sekolah yang bersih dan sehat. Pelaksanaan perilaku hidup bersih dan sehat di sekolah merupakan salah satu upaya untuk membantu mewujudkan Gerakan Sekolah Sehat. Beberapa kegiatan yang dapat dilakukan diantaranya seperti dibawah ini.
              </p>
            </motion.div>
            <div className="w-[400px] mt-6">
              <TrashCanvas/>
            </div>
          </div>

          <div className="md:px-16 px-9 pt-5 pb-9 border-2 border-white rounded-2xl">
            <Accordion
              type="single"
              collapsible
              className="w-full text-[#ECFFFD]"
            >
              <AccordionItem value="item-1" className="border-b border-[#ECFFFD]">
                <AccordionTrigger className="md:text-xl text-base">
                Piket Kelas
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                Dimulai dari hal sederhana seperti melaksanakan piket kelas sesuai dengan jadwal yang telah disepakati. Ini merupakan langkah awal dalam mewujudkan lingkungan belajar yang nyaman dan sehat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-[#ECFFFD]">
                <AccordionTrigger className="md:text-xl text-base">
                Kerja Bakti
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                Melatih jiwa kepedulian peserta didik terhadap lingkungan sekolah. Dengan membersihkan setiap bagian sekolah mulai dari lapangan, ruang kelas, toilet, dan sarana prasarana lainnya yang ada di sekolah.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-[#ECFFFD]">
                <AccordionTrigger className="md:text-xl text-base">
                Penerapan 3R (Reuse, Reduce, Recycle)
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                Reuse yaitu menggunakan kembali kemasan plastik yang dapat digunakan lebih dari satu kali. Reduce merupakan upaya mengurangi sampah. Recycle adalah kegiatan mendaur ulang sampah yang sulit terurai oleh alam.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
