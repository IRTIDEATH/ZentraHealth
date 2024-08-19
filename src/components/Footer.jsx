import React from "react";
import logo from '../../public/assets/icon/logo.png'
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#ECFFFD]">
        <div className="px-6 divide-y divide-[#D1D0D0] bg-[#125872] text-[#ECFFFD] rounded-t-[3rem]">
            <div className="container mx-auto flex flex-col justify-between py-10 space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3 flex flex-col space-y-8">
                <a
                    href="#"
                    className="flex justify-center space-x-3 lg:justify-start"
                >
                    <div className="flex items-center justify-center w-12 h-12">
                    <img src={logo} alt="" />
                    </div>
                    <span className="self-center text-2xl font-bold">
                    Zentra<span className="font-medium">Health</span>
                    </span>
                </a>
                <div className="flex flex-col space-y-3">
                    <h1 className="text-sm">SMK Negeri 46 Jakarta</h1>
                    <div className="flex space-x-3">
                        <MapPin />
                        <p className="text-xs">
                            B7, Jl. Cipinang Pulo No.19, RT.7/RW.14, North Cipinang Besar, Jatinegara, East Jakarta City, Jakarta 13410
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <Phone size={14}/>
                        <p className="text-xs">
                            {"(021)"} 8195127
                        </p>
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-12 md:gap-x-60 gap-y-8 sm:grid-cols-2">
                <div className="space-y-3">
                    <h3 className=" uppercase font-bold">
                    Tautan Halaman
                    </h3>
                    <ul className="space-y-1">
                    <li>
                        <a href="#">
                        Features
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Integrations
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        FAQ
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="uppercase font-bold">Sumber & Kredit</h3>
                    <ul className="space-y-1">
                    <li>
                        <a href="#">
                        Public API
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Documentation
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Guides
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center">
                Oleh Tim ZentraHealth  |  2024
            </div>
        </div>
    </footer>
  );
};

export default Footer;
