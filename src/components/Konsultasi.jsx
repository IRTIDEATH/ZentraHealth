import React from "react";

const Konsultasi = () => {
  return (
    <form className="flex flex-col md:px-16 px-7 py-12 space-y-7 md:space-y-5 pt-[60rem] md:pt-[25rem] bg-[#ECFFFD]">
      <div className="border-b border-gray-900/10 pb-5" id="konsultasi">
        <h2 className="text-2xl font-semibold leading-7 text-[#125872]">
          Layanan Konsultasi
        </h2>
        <p className="mt-2 text-base leading-6 text-[#737373] max-w-[500px]">
          Anda memiliki masalah dengan kesehatan? Kami siap memberikan solusi
          terbaik melalui form di bawah ini!
        </p>

        <div className="max-w-2xl mt-10">
          <div className="mb-5">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="bg-[#ECFFFD] border-2 border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5"
            />
          </div>
          <div className="mb-5">
            <input
              type="number"
              placeholder="Usia"
              className="bg-[#ECFFFD] border-2 border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5"
            />
          </div>
          <div className="mb-5">
            <select
              className="bg-[#ECFFFD] border-2 border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5"
            >
              <option disabled selected="selected">Jenis Kesehatan</option>
              <option>Kesehatan Fisik</option>
              <option>Kesehatan Gizi</option>
              <option>Kesehatan Imunisasi</option>
              <option>Kesehatan Mental</option>
              <option>Kesehatan Lingkungan</option>
            </select>
          </div>
          <div className="mb-5">
            <textarea
              rows="1"
              className="block p-4 w-full text-sm text-gray-900 bg-[#ECFFFD] rounded-full border-2 border-gray-300"
              placeholder="Keluhan..."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start">
        <button
          type="submit"
          className="rounded-full bg-[#125872] px-5 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Kirim
        </button>
      </div>
    </form>
  );
};

export default Konsultasi;
