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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const FloatingNav = ({ navItems }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
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
          "flex fixed top-4 inset-x-0 mx-auto rounded-full border border-[#B8B8B8] dark:border-white/[0.2] dark:bg-black bg-[#ECFFFD] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[40] w-[60%] px-6 py-4 items-center justify-between"
        )}
      >
        <div>logo</div>
        <div className="flex flex-row space-x-4">
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              // href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="hidden sm:block text-sm cursor-pointer">
                {navItem.name}
              </span>
            </a>
          ))}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="text-sm font-normal">
              Konten
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Fisik</DropdownMenuItem>
              <DropdownMenuItem>Bergizi</DropdownMenuItem>
              <DropdownMenuItem>Imunisasi</DropdownMenuItem>
              <DropdownMenuItem>Lingkungan</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="border text-sm font-medium relative border-[#B8B8B8] dark:border-white/[0.2] text-black dark:text-white px-6 py-2 rounded-full">
            <span>Konsultasi</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#FD5852] to-transparent h-px" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
