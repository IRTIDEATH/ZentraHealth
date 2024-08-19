import React from "react";
import pluss from "/assets/icon/pluss.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BuahCanvas from "./canvas/Buah";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const Section4 = () => {
  const {scrollYProgress} = useScroll()

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  return (
    <div className="bg-[#FD5852]" id="bergizi">
      <div className="w-full bg-[#ECFFFD] md:rounded-tl-[5rem] rounded-tl-[4rem] pb-16 md:pb-28">
        <div className="flex items-center justify-start">
          <div className="absolute flex pl-10 md:pl-16">
            <motion.img
              src={pluss}
              alt=""
              className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] object-contain shadowplus"
              style={{rotate}}
            />
          </div>
        </div>
        <div className="flex flex-col md:px-16 px-7 py-12 space-y-7 md:space-y-16">
          <div className="flex flex-col md:flex-row-reverse pt-12 items-center justify-between">
            <div className="flex flex-col space-y-5">
              <h1 className="md:text-3xl text-xl text-[#1E1E1E] font-bold">
                Sehat Bergizi
              </h1>
              <p className="text-[#1E1E1E] md:text-xl text-base text-start font-normal text-wrap md:w-[480px]">
              Meningkatkan kesehatan peserta didik melalui edukasi pola makan yang tepat dan bergizi.
              Guna meningkatkan derajat kesehatan peserta didik, maka perlu diterapkannya pola makan yang tepat dan konsumsi makanan bergizi. Bagaimana langkah yang perlu kita gerakkan untuk mencapai kondisi kesehatan peserta didik yang ideal?
              </p>
            </div>
            <div className="w-[400px] mt-6">
              <BuahCanvas/>
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
                Edukasi Kegiatan Sehat Bergizi
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                ● Pembiasaan makan dan minum dengan gizi seimbang termasuk minum air putih, makan buah dan sayur setiap hari.<br></br>
                ● Peningkatan pemahaman Gizi Seimbang (Isi Piringku).<br></br>
                ● Meminimalisir konsumsi makanan cepat saji, berpengawet, tinggi gula dan kolesterol.<br></br>
                ● Membina kantin yang sehat.


                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-[#1E1E1E]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                Isi Piringku.
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                  <img src="/public/assets/content/isipiring1.svg" alt="" srcset="" />
                  <a href="https://ditpsd.kemdikbud.go.id/kss/wp-content/uploads/2023/05/isi-piringku-1-1024x1024.png" class="text-gray-500 italic">https://ditpsd.kemdikbud.go.id/kss/wp-content/uploads/2023/05/isi-piringku-1-1024x1024.png</a><br/><br/>
                  Dalam satu piring setiap kali makan, setengah piring diisi dengan sayur dan buah, sedangkan setengah lainnya diisi dengan makanan pokok dan lauk pauk. Tak lupa juga untuk mengonsumsi 8 gelas air setiap hari, melakukan aktivitas fisik 30 menit setiap hari, dan mencuci tangan dengan air dan sabun sebelum dan setelah makan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-[#1E1E1E]"
              >
                <AccordionTrigger className="md:text-xl text-base">
                Komponen Kantin Sehat
                </AccordionTrigger>
                <AccordionContent className="md:text-lg text-sm">
                <img src="/public/assets/content/isipiring2.svg" alt="" srcset="" />
                <a href="https://ditpsd.kemdikbud.go.id/kss/wp-content/uploads/2023/05/4-pilar-kantin-sehat-sekolah-1024x1024.png" class="text-gray-500 italic">https://ditpsd.kemdikbud.go.id/kss/wp-content/uploads/2023/05/4-pilar-kantin-sehat-sekolah-1024x1024.png
                </a><br/><br/>
                    ● Komitmen dan Manajemen Sekolah : Memonitor konsumsi jajanan yang disediakan di kantin sekolah.
                <br/>● Sumber Daya Manusia : Para penjual memiliki pengetahuan serta keterampilan mengelola kantin dan jajanan sehat di sekolah.
                <br/>● Sarana dan Prasarana : Menjamin kebersihan peralatan makan di kantin sekolah serta lingkungan kantin.
                <br/>● Mutu Pangan : Jajanan yang dijual wajib memenuhi standar aman, sehat, serta bergizi.

                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
