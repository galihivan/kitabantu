import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customBlue text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="d-flex flex-column w-50">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Logo" className="w-24 h-24" />
            <h1 className="text-2xl font-bold text-customBlue">Bantu</h1>
          </div>
          <p className="fs-5 fw-bold mb-1">
           Menyediakan Platform Freelance untuk Membantu Indonesia Tumbuh!
          </p>
         
        </div>
        <div className="d-flex flex-column mx-1">
          <p className="fs-6 fw-bold">Keahlian</p>
          <div className="d-flex flex-column text-secondary gap-2">
            <p className="m-0">Pengembangan Web</p>
            <p className="m-0">Desain Grafis</p>
            <p className="m-0">Pemasaran Digital</p>
            <p className="m-0">Penulisan Konten</p>
            <p className="m-0">Fotografi</p>
          </div>
        </div>
        <div className="d-flex flex-column mx-1">
          <p className="fs-6 fw-bold">Perusahaan</p>
          <div className="d-flex flex-column text-secondary gap-2">
            <p className="m-0">Tentang Kami</p>
            <p className="m-0">FAQ</p>
            <p className="m-0">Kebijakan Privasi</p>
            <p className="m-0">Ketentuan Layanan</p>
            <p className="m-0">Bantuan</p>
          </div>
        </div>
        <div className="d-flex flex-column mx-1">
          <p className="fs-6 fw-bold">Komunitas</p>
          <div className="d-flex flex-column text-secondary gap-2">
            <p className="m-0">Tips Sukses</p>
            <p className="m-0">Blog</p>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
