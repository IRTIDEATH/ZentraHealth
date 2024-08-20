import React from "react";

const Konsultasi = () => {
  return (
    <form className="flex flex-col md:px-16 px-7 py-12 space-y-7 md:space-y-5 pt-[60rem] md:pt-[25rem] bg-[#ECFFFD]">
      <div className="border-b border-gray-900/10 pb-5" id="konsultasi">
        <h2 className="text-2xl font-semibold leading-7 text-[#125872]">
          Layanan Konsultasi
        </h2>
        <p className="mt-2 text-base leading-6 text-[#737373] max-w-[500px]">
            Anda memiliki masalah dengan kesehatan? Kami siap memberikan solusi terbaik melalui form di bawah ini!
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="block w-full rounded-full border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-4">
            <input
              type="number"
              placeholder="Usia"
              className="block w-full rounded-full border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              className="block w-full rounded-full border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            >
              <option disabled selected="selected">Jenis Kendala</option>
              <option>Kesehatan Fisik</option>
              <option>Kesehatan Gizi</option>
              <option>Kesehatan Imunisasi</option>
              <option>Kesehatan Mental</option>
              <option>Kesehatan Lingkungan</option>
            </select>
          </div>

          <div className="sm:col-span-4">
            <input
              type="text"
              placeholder="Keluhan"
              className="block w-full rounded-full border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start">
        <button
          type="submit"
          className="rounded-full bg-[#125872] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Kirim
        </button>
      </div>
    </form>
  );
};

export default Konsultasi;
