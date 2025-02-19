import React, { useState } from 'react';
import logo from '../../assets/logo1.jpg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isCommunityOpen, setIsCommunityOpen] = useState(false);

    return (
        <footer className="bg-customBlue text-gray-700 py-8">
            <div className="container mx-auto px-4 grid gap-8 md:grid-cols-4">
                {/* Logo and Contact Info */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="videobelajar logo" className="w-32 h-auto" />
                    <p className="mt-2 text-center md:text-left">
                      Menyediakan Platform Freelance untuk Membantu Indonesia Tumbuh!
                    </p>
                    <p className="mt-2 text-center md:text-left">
                        Indonesia
                    </p>
                    <p className="mt-2 text-center md:text-left">
                        +62-877-777-777
                    </p>
                </div>

                {/* Category Links */}
                <div className="collapsible md:ml-8">
                    <h3 className="font-semibold cursor-pointer flex items-center" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                        Kategori
                        <div className="ml-auto md:hidden">
                            <i className={`fas fa-chevron-right transition-transform duration-300 ${isCategoryOpen ? 'rotate-90' : ''}`}></i>
                        </div>
                    </h3>
                    <ul className={`mt-2 space-y-1 ${isCategoryOpen ? '' : 'hidden'} md:block`}>
                        <li><a href="#" className="hover:text-orange-600">Digital & Teknologi</a></li>
                        <li><a href="#" className="hover:text-orange-600">Pemasaran</a></li>
                        <li><a href="#" className="hover:text-orange-600">Manajemen Bisnis</a></li>
                        <li><a href="#" className="hover:text-orange-600">Pengembangan Diri</a></li>
                        <li><a href="#" className="hover:text-orange-600">Desain</a></li>
                    </ul>
                </div>

                {/* Company Links */}
                <div className="collapsible md:ml-8">
                    <h3 className="font-semibold cursor-pointer flex items-center" onClick={() => setIsCompanyOpen(!isCompanyOpen)}>
                        Perusahaan
                        <div className="ml-auto md:hidden">
                            <i className={`fas fa-chevron-right transition-transform duration-300 ${isCompanyOpen ? 'rotate-90' : ''}`}></i>
                        </div>
                    </h3>
                    <ul className={`mt-2 space-y-1 ${isCompanyOpen ? '' : 'hidden'} md:block`}>
                        <li><a href="#" className="hover:text-orange-600">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-orange-600">FAQ</a></li>
                        <li><a href="#" className="hover:text-orange-600">Kebijakan Privasi</a></li>
                        <li><a href="#" className="hover:text-orange-600">Ketentuan Layanan</a></li>
                        <li><a href="#" className="hover:text-orange-600">Bantuan</a></li>
                    </ul>
                </div>

                {/* Community Links */}
                <div className="collapsible md:ml-8">
                    <h3 className="font-semibold cursor-pointer flex items-center" onClick={() => setIsCommunityOpen(!isCommunityOpen)}>
                        Komunitas
                        <div className="ml-auto md:hidden">
                            <i className={`fas fa-chevron-right transition-transform duration-300 ${isCommunityOpen ? 'rotate-90' : ''}`}></i>
                        </div>
                    </h3>
                    <ul className={`mt-2 space-y-1 ${isCommunityOpen ? '' : 'hidden'} md:block`}>
                        <li><a href="#" className="hover:text-orange-600">Tips Sukses</a></li>
                        <li><a href="#" className="hover:text-orange-600">Blog</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto px-4 mt-8 border-t pt-4 text-center md:flex md:justify-between md:text-left">
                <p className="text-sm">©2025 Kita Bantu Indonesia All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-orange-600">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="hover:text-orange-600">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="hover:text-orange-600">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="hover:text-orange-600">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
