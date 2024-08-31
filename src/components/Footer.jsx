import React from "react";
import logo from "/assets/icon/logo.svg";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#ECFFFD]">
      <div className="px-3 md:px-6 divide-y divide-[#D1D0D0] bg-[#125872] text-[#ECFFFD] rounded-t-[3rem]">
        <div className="container mx-auto flex flex-col justify-between md:items-start items-center py-10 space-x-0 md:space-x-12 space-y-8 md:flex-row md:space-y-0">
          <div className="md:w-1/3 flex flex-col space-y-8">
            <a
              href="#"
              className="flex justify-center md:justify-start space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12">
                <img src={logo} alt="" />
              </div>
              <span className="self-center text-2xl font-bold">
                Zentra<span className="font-medium">Health</span>
              </span>
            </a>
            <div className="flex flex-col space-y-3 text-wrap">
              <h1 className="text-sm">SMK Negeri 46 Jakarta</h1>
              <div className="flex space-x-3">
                <MapPin className="text-2xl" />
                <a href="https://www.google.com/maps/place/SMK+Negeri+46+Jakarta/@-6.2170907,106.8838618,15z/data=!4m6!3m5!1s0x2e69f36a76939ce9:0x1dd69348f251fa2a!8m2!3d-6.2170907!4d106.8838618!16s%2Fg%2F1220__b6?entry=ttu">
                  <p className="text-xs">
                    B7, Jl. Cipinang Pulo No.19, RT.7/RW.14, North Cipinang
                    Besar, Jatinegara, East Jakarta City, Jakarta 13410
                  </p>
                </a>
              </div>
              <div className="flex space-x-3">
                <Phone size={14} />
                <a href="https://www.google.com/maps/place/SMK+Negeri+46+Jakarta/@-6.2170907,106.8838618,15z/data=!4m6!3m5!1s0x2e69f36a76939ce9:0x1dd69348f251fa2a!8m2!3d-6.2170907!4d106.8838618!16s%2Fg%2F1220__b6?entry=ttu">
                  <p className="text-xs">{"(021)"} 8195127</p>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 text-xs gap-y-8 w-full md:w-[60%] space-x-5">
            <div className="space-y-3 text-start md:text-center text-wrap">
              <h3 className=" uppercase font-bold">Tautan Halaman</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline underline-offset-2">Beranda</a>
                </li>
                <li>
                  <a href="#tentang" className="hover:underline underline-offset-2">Tentang</a>
                </li>
                <li>
                  <a href="#fisik" className="hover:underline underline-offset-2">Sehat Fisik</a>
                </li>
                <li>
                  <a href="#bergizi" className="hover:underline underline-offset-2">Sehat Bergizi</a>
                </li>
                <li>
                  <a href="#imunisasi" className="hover:underline underline-offset-2">Sehat Imunisasi</a>
                </li>
                <li>
                  <a href="#mental" className="hover:underline underline-offset-2">Sehat Mental</a>
                </li>
                <li>
                  <a href="#lingkungan" className="hover:underline underline-offset-2">Sehat Lingkungan</a>
                </li>
                <li>
                  <a href="#kasus" className="hover:underline underline-offset-2">Masalah Kesehatan</a>
                </li>
                <li>
                  <a href="#konsultasi" className="hover:underline underline-offset-2">Konsultasi</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-start md:text-end text-wrap">
              <h3 className="uppercase font-bold">Sumber & Kredit</h3>
              <ul className="space-y-1">
                <li>
                  <a href="https://uks.kemdikbud.go.id/sekolah-sehat" className="hover:underline underline-offset-2">
                    uks.kemdikbud
                  </a>
                </li>
                <li>
                  <a href="https://ayosehat.kemkes.go.id/1000-hari-pertama-kehidupan/seputar-imunisasi" className="hover:underline underline-offset-2">
                    ayosehat.kemkes
                  </a>
                </li>
                <li>
                  <a href="https://data.goodstats.id/statistic/1-dari-3-remaja-indonesia-alami-masalah-kesehatan-mental-GkFkh" className="hover:underline underline-offset-2">
                    data.goodstats
                  </a>
                </li>
                <li>
                  <a href="https://mediaindonesia.com/jelita/688226/kurang-aktivitas-fisik-ibu-rumah-tangga-bisa-terkena-saraf-terjepit" className="hover:underline underline-offset-2">
                    mediaindonesia.com
                  </a>
                </li>
                <li>
                  <a href="https://blitarkawentar.jawapos.com/kawentaran/2274978303/ratusan-balita-di-kota-blitar-terindikasi-obesitas-gegara-minum-sufor-tinggi-gula-dinkes-berikan-imbauan-ini" className="hover:underline underline-offset-2">
                    blitarkawentar.jawapos
                  </a>
                </li>
                <li>
                  <a href="https://nasional.kompas.com/read/2024/01/05/13150551/kemenkes-bakal-gencarkan-imunisasi-polio-setelah-temukan-kasus-di-jawa" className="hover:underline underline-offset-2">
                    nasional.kompas.com
                  </a>
                </li>
                <li>
                  <a href="https://www.bbc.com/indonesia/articles/c51w0zn1xeyo" className="hover:underline underline-offset-2">
                    bbc.com
                  </a>
                </li>
                <li>
                  <a href="https://www.liputan6.com/lifestyle/read/5623747/baru-3-hari-dibersihkan-pandawara-sungai-citarum-kembali-dipenuhi-sampah?page=4" className="hover:underline underline-offset-2">
                    liputan6.com
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ryann_caesar?igsh=MThnOGc3bHl4Ymo0" className="hover:underline underline-offset-2">
                    Kredit aset 3D : ryann_caesar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center">
          Oleh Tim ZentraHealth | 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
