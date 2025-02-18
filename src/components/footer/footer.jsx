import React, { useState } from "react";
import logo from "../../assets/logo1.jpg";
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
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
        {/* Logo and Introduction */}
        <div className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>
          <p className="text-lg font-bold mb-1">
            Menyediakan Platform Freelance untuk Membantu Indonesia Tumbuh!
          </p>
        </div>

        {/* Keahlian Section */}
        <div className="flex flex-col mx-1 sm:mx-0">
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
          <div
            className={`text-white gap-2 ${
              openSections["keahlian"] ? "block" : "hidden"
            } sm:block`}
          >
            <p className="m-0 text-left">Pengembangan Web</p>
            <p className="m-0 text-left">Desain Grafis</p>
            <p className="m-0 text-left">Pemasaran Digital</p>
            <p className="m-0 text-left">Penulisan Konten</p>
            <p className="m-0 text-left">Fotografi</p>
          </div>
        </div>

        {/* Perusahaan Section */}
        <div className="flex flex-col mx-1 sm:mx-0">
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
          <div
            className={`text-white gap-2 ${
              openSections["perusahaan"] ? "block" : "hidden"
            } sm:block`}
          >
            <p className="m-0 text-left">Tentang Kami</p>
            <p className="m-0 text-left">FAQ</p>
            <p className="m-0 text-left">Kebijakan Privasi</p>
            <p className="m-0 text-left">Ketentuan Layanan</p>
            <p className="m-0 text-left">Bantuan</p>
          </div>
        </div>

        {/* Komunitas Section */}
        <div className="flex flex-col mx-1 sm:mx-0">
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
          <div
            className={`text-white gap-2 ${
              openSections["komunitas"] ? "block" : "hidden"
            } sm:block`}
          >
            <p className="m-0 text-left">Tips Sukses</p>
            <p className="m-0 text-left">Blog</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
