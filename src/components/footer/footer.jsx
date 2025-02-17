import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-customBlue text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.jpg" alt="Logo" className="w-24 h-24" />
            <h1 className="text-2xl font-bold text-customBlue">Bantu</h1>
          </div>
          <p className="text-lg font-bold mb-1">
            Menyediakan Platform Freelance untuk Membantu Indonesia Tumbuh!
          </p>
        </div>

        {/* Menu Keahlian */}
        <div className="flex flex-col mx-1">
          <button
            className="flex justify-between items-center text-lg font-bold w-full sm:cursor-default"
            onClick={() => toggleSection("keahlian")}
          >
            Keahlian
            <FaChevronDown
              className={`sm:hidden transition-transform ${
                openSections["keahlian"] ? "rotate-180" : ""
              }`}
            />
          </button>
          <div className={`text-white gap-2 ${openSections["keahlian"] ? "block" : "hidden"} sm:block`}>
            <p className="m-0">Pengembangan Web</p>
            <p className="m-0">Desain Grafis</p>
            <p className="m-0">Pemasaran Digital</p>
            <p className="m-0">Penulisan Konten</p>
            <p className="m-0">Fotografi</p>
          </div>
        </div>

        {/* Menu Perusahaan */}
        <div className="flex flex-col mx-1">
          <button
            className="flex justify-between items-center text-lg font-bold w-full sm:cursor-default"
            onClick={() => toggleSection("perusahaan")}
          >
            Perusahaan
            <FaChevronDown
              className={`sm:hidden transition-transform ${
                openSections["perusahaan"] ? "rotate-180" : ""
              }`}
            />
          </button>
          <div className={`text-white gap-2 ${openSections["perusahaan"] ? "block" : "hidden"} sm:block`}>
            <p className="m-0">Tentang Kami</p>
            <p className="m-0">FAQ</p>
            <p className="m-0">Kebijakan Privasi</p>
            <p className="m-0">Ketentuan Layanan</p>
            <p className="m-0">Bantuan</p>
          </div>
        </div>

        {/* Menu Komunitas */}
        <div className="flex flex-col mx-1">
          <button
            className="flex justify-between items-center text-lg font-bold w-full sm:cursor-default"
            onClick={() => toggleSection("komunitas")}
          >
            Komunitas
            <FaChevronDown
              className={`sm:hidden transition-transform ${
                openSections["komunitas"] ? "rotate-180" : ""
              }`}
            />
          </button>
          <div className={`text-white gap-2 ${openSections["komunitas"] ? "block" : "hidden"} sm:block`}>
            <p className="m-0">Tips Sukses</p>
            <p className="m-0">Blog</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
