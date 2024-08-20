import React from "react";
import { ReactTyped } from "react-typed";

const Welcome = () => {
  return (
    <div className="w-full" id="tentang">
      <div className="flex flex-col md:px-16 px-7 py-60 leading-none">
        <h1 className="text-2xl md:text-4xl font-bold">
          Bersama <span className="text-[#FD5852]">ZentraHealth</span> <br />
          Wujudkan{" "}
          <span className="text-[#FD5852]">
            <ReactTyped loop strings={["5s, Sehat Fisik", "5s, Sehat Bergizi", "5s, Sehat Imunisasi", "5s, Sehat Mental", "5s, Sehat Lingkungan"]} typeSpeed={70} backSpeed={80} />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
