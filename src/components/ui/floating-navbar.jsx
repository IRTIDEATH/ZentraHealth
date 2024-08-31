import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "/assets/icon/logo.svg";

export const FloatingNav = ({ navItems }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.001) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed top-2 inset-x-0 mx-auto rounded-full border border-[#B8B8B8] dark:border-white/[0.2] dark:bg-black bg-[#ECFFFD] shadow-md z-[40] max-w-3xl px-4 sm:px-6 py-2 sm:py-4 items-center justify-between"
        )}
      >
        <div className="flex-shrink-0">
          <img src={logoImage} alt="Logo" className="h-8 sm:h-10" />
        </div>
        <div className="flex flex-row space-x-4">
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-[#FD5852] transition-colors items-center flex"
              )}
            >
              <span className="hidden sm:block text-sm cursor-pointer">
                {navItem.name}
              </span>
            </a>
          ))}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="text-sm font-normal flex items-center hover:text-[#FD5852]">
              Konten
              <svg
                className="w-4 h-4 ml-1 transition-transform transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuItem><a href="#fisik">Fisik</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#bergizi">Bergizi</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#imunisasi">Imunisasi</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#mental">Mental</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#lingkungan">Lingkungan</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a
            href="#konsultasi"
            className="border text-sm font-medium relative border-[#B8B8B8] dark:border-white/[0.2] text-black dark:text-white px-4 sm:px-6 py-2 rounded-full hover:text-[#FD5852] transition-colors"
          >
            <span>Konsultasi</span>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
