import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { DataC } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Instagram, Github } from "lucide-react";
import VanillaTilt from "vanilla-tilt";

const Team = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  useEffect(() => {
    // Initialize VanillaTilt for each card
    const tiltElements = document.querySelectorAll('.tilt');
    tiltElements.forEach(element => {
      VanillaTilt.init(element, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2
      });
    });
  }, []);

  return (
    <div className="w-full bg-[#ECFFFD] pt-[10rem] md:pt-[6rem] pb-[8rem]">
      <div className="flex flex-col items-center justify-center mx-2">
        <h1 className="text-3xl font-bold">
          Tim <span className="text-[#125872]">Kami</span>
        </h1>
        <p className="text-[#737373] text-lg text-center mt-1">Kami, tim ZentraHealth terdiri dari para anggota yang terlatih di <br/> dalam setiap bidangnya.</p>
      </div>
      <div className="mt-12 w-full flex justify-center bg-[#ECFFFD]">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-[15rem] md:max-w-[45rem]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent className="-ml-1">
            {DataC.map((datac) => (
              <CarouselItem
                key={datac.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3 tilt"
              >
                <div className="p-3">
                  <div className="bg-[#ECFFFD] rounded-xl border-2 border-[#858F8E] transition-transform transform hover:scale-105 hover:shadow-xl">
                    <div className="py-6">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="relative flex flex-col items-center justify-end">
                          <Avatar>
                            <AvatarImage src={datac.avatarUrl} />
                            <AvatarFallback>ZH</AvatarFallback>
                          </Avatar>
                          <Badge className="absolute z-10">{datac.badge}</Badge>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <h1 className="text-[#1E1E1E] font-semibold text-lg">
                            {datac.nama}
                          </h1>
                          <p className="text-sm font-normal text-[#A0A0A0]">
                            {datac.description}
                          </p>
                        </div>
                        <div className="flex flex-row items-center space-x-3">
                          <a href={datac.instagram} className="p-2 rounded-full border-2 border-[#858F8E] hover:border-[#FF908C] hover:bg-[#FF908C] hover:text-[#ECFFFD] text-[#858F8E]"><Instagram /></a>
                          <a href={datac.github} className="p-2 rounded-full border-2 border-[#858F8E] hover:border-[#FF908C] hover:bg-[#FF908C] hover:text-[#ECFFFD] text-[#858F8E]"><Github /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Team;
