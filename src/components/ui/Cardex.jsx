import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ScrollArea } from "./scroll-area";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-[#ECFFFD] rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-[#ECFFFD] dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.p
                    layoutId={`button-${active.title}-${id}`}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-[#125872] text-[#ECFFFD]"
                  >
                    {active.ctaText}
                  </motion.p>
                </div>
                <ScrollArea className="text-neutral-600 text-xs md:text-sm lg:text-base h-60 flex flex-col items-start gap-4 dark:text-neutral-400">
                  <div className="mb-20 xl:mb-8 px-4">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </div>
                </ScrollArea>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-[#D6E9E7] dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h4
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h4>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-[#125872] hover:bg-[#ECFFFD] hover:text-[#1E1E1E] text-[#ECFFFD] mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Saraf Terjepit",
    title: "Kasus Kesehatan Fisik",
    src: "/assets/content/kasusfisik.svg",
    ctaText: "Lihat",
    content: () => {
      return (
        <p>
          <p className="font-semibold">
            Dikutip dari mediaindonesia.com, pada 27 Juli 2024.
          </p>{" "}
          <br />
          Dokter Spesialis Orthopaedi Traumatologi dan Konsultan Tulang Belakang
          RSUD Dr Moewardi Rieva Ermawan mengatakan, karena gaya hidup sudah ada
          perubahan di mana laki-laki dan perempuan punya kesempatan yang sama
          terkena saraf terjepit. Saat ini perempuan pun juga banyak
          aktivitasnya baik ibu-ibu hingga remaja.
          <br />
          <br />
          "Kalau perempuan biasanya habis melakukan suatu pekerjaan rumah tangga
          yang tidak biasa dilakukan misalnya angkat galon atau mengangkat beban
          sendiri di rumah sebabkan bantalan sendiri kalah karena mendadak,"
          kata dr Rieva dikutip pada Sabtu (27/7). <br />
          (selengkapnya:{" "}
          <a
            href="//mediaindonesia.com/jelita/688226/kurang-aktivitas-fisik-ibu-rumah-tangga-bisa-terkena-saraf-terjepit"
            class="text-blue-500"
          >
            {" "}
            Kasus Kesehtan Fisik
          </a>
          )
        </p>
      );
    },
  },
  {
    description: "Diabetes",
    title: "Kasus Kesehatan Gizi",
    src: "/assets/content/kasusgizi.svg",
    ctaText: "Lihat",
    content: () => {
      return (
        <p>
          <p className="font-semibold">
            Dikutip dari blitarkawentar.jawapos.com, pada 15 Agustus 2024.
          </p>{" "}
          <br />
          Kepala Bidang Kesehatan Masyarakat (Kesmas) Dinas Kesehatan (Dinkes)
          Kota Blitar, Endang Purwono, membenarkan kasus ratusan anak balita
          terindikasi obesitas dikarenakan pemilihan susu formula (sufor) yang
          memiliki kandungan gula tinggi atau melebihi standar yang ditentukan.
          <br />
          <br />
          “Kalau tidak pandai memilih sufor dengan kandungan gula yang rendah
          bisa menjadikan obesitas,” jelasnya kepada Jawa Pos Radar Blitar, Rabu
          (14/8/2024).
          <br />
          (selengkapnya:{" "}
          <a
            href="https://blitarkawentar.jawapos.com/kawentaran/2274978303/ratusan-balita-di-kota-blitar-terindikasi-obesitas-gegara-minum-sufor-tinggi-gula-dinkes-berikan-imbauan-ini"
            className="text-blue-500"
          >
            {" "}
            Kasus Kesehatan Gizi
          </a>
          )
        </p>
      );
    },
  },

  {
    description: "Polio",
    title: "Kasus Imunisasi",
    src: "/assets/content/kasusimun.svg",
    ctaText: "Lihat",
    content: () => {
      return (
        <p>
          <p className="font-semibold">
            Dikutip dari nasional.kompas.com, pada 05 Januari 2024.
          </p>{" "}
          <br />
          Terbaru, anak berusia 6 tahun di Klaten, Jawa Tengah positif polio
          setelah pulau dari Sampang, Madura, Jawa Timur. Menteri Kesehatan Budi
          Gunadi Sadikin akan menggencarkan vaksinasi polio di daerah-daerah
          kasus dan daerah dengan risiko penularan tinggi lumpuh layuh tahun
          ini.
          <br />
          <br />
          "Sudah kita lakukan sama yang di Aceh, sama yang di Sumatera, kita
          akan kejar. Jadi kita akan tambah vaksinasi polio di daerah-daerah
          itu," kata Budi di Kompleks Istana Kepresidenan, Jakarta Pusat, Jumat
          (5/1/2024).
          <br />
          (selengkapnya:{" "}
          <a href="https://nasional.kompas.com/read/2024/01/05/13150551/kemenkes-bakal-gencarkan-imunisasi-polio-setelah-temukan-kasus-di-jawa"
          className="text-blue-500">
            {" "}
            Kasus Kesehatan Imunisasi
          </a>
          )
        </p>
      );
    },
  },
  {
    description: "Skizofrenia",
    title: "Kasus Kesehatan Mental",
    src: "/assets/content/kasusmental.svg",
    ctaText: "Lihat",
    content: () => {
      return (
        <p>
          <p className="font-semibold">
            Dikutip dari bbc.com, pada 11 Maret 2024.
          </p>{" "}
          <br />
          Kasus pembunuhan seorang anak di Bekasi oleh ibu kandungnya, yang
          terindikasi mengidap skizofrenia, dinilai mencerminkan kegagalan
          deteksi dini kasus-kasus gangguan jiwa.
          <br />
          <br />
          “Ini kan kasus yang sebenarnya terlambat ditangani, terlambat diobati.
          Tapi akhirnya orang jadi takut misalnya, ‘Kalau saya menikah dengan
          orang skizofrenia jadi seperti ini’. Ketika mereka mau bekerja,
          menjalani pendidikan, jadi dianggap seperti itu. Kesannya jadi sangat
          keji, padahal itu di luar kendali diri dia,” kata Bagus kepada BBC
          News Indonesia pada Minggu (10/03).
          <br />
          (selengkapnya:{" "}
          <a href="https://www.bbc.com/indonesia/articles/c51w0zn1xeyo"
          className="text-blue-500">
            {" "}
            Kasus Kesehatan Mental
          </a>
          )
        </p>
      );
    },
  },
  {
    description: "Lautan Sampah",
    title: "Kasus Kesehatan Lingkungan",
    src: "/assets/content/kasuslingkungan.svg",
    ctaText: "Lihat",
    content: () => {
      return (
        <p>
          <p className="font-semibold">
            Dikutip dari liputan6.com, pada 20 Juni 2024.
          </p>{" "}
          <br />
          Pandawara Group baru-baru ini mengajak masyarakat Bandung Raya untuk
          bersama-sama membersihkan sampah yang berada di sungai Jembatan
          Babakan Sapan (BBS) di kawasan Sungai Citarum yang menghubungkan
          Batujajar dan Cililin, Kabupaten Bandung Barat.
          <br />
          <br />
          "Bukan Bandung lautan api, tapi Bandung lautan sampah, jika kondisi
          ini terjadi selama berpuluh-puluh tahun ke depan," ucap Pandawara
          Group. Oleh karena itu mereka mengajak masyarakat dari semua elemen
          untuk membersihkan sampah-sampah yang ada di kawasan Sungai Citarum.
          <br />
          (selengkapnya:{" "}
          <a href="https://www.liputan6.com/lifestyle/read/5623747/baru-3-hari-dibersihkan-pandawara-sungai-citarum-kembali-dipenuhi-sampah?page=4"
          className="text-blue-500">
            {" "}
            Kasus Kesehatan Imunisasi
          </a>
          )
        </p>
      );
    },
  },
];
