import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle state menu
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center p-4 fixed w-full top-0 left-0 z-10 transition-shadow ${
        scrolling ? 'shadow-md' : ''
      } bg-customBlue`}
    >
      <div className="flex items-center gap-2">
        <img src="/logo.jpg" alt="Logo" className="w-16 h-16" />
      </div>
      
      {/* Menu untuk layar besar (desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <a href="#" className="text-white">Bantu Pro</a>
        <a href="#" className="text-white">Explore</a>
        <a href="#" className="text-white">English</a>
        <button className="border px-3 py-1 rounded text-white border-white">Sign In</button>
        <button className="bg-white text-customBlue px-3 py-1 rounded">Join</button>
      </div>

      {/* Tombol hamburger untuk mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          ☰
        </button>
      </div>
      
      {/* Menu dropdown untuk layar kecil */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-customBlue py-4 text-center`}>
        <a href="#" className="block text-white py-2">Bantu Pro</a>
        <a href="#" className="block text-white py-2">Explore</a>
        <a href="#" className="block text-white py-2">English</a>
        <button className="block mx-auto border px-3 py-1 rounded text-white border-white mt-2">Sign In</button>
        <button className="block mx-auto bg-white text-customBlue px-3 py-1 rounded mt-2">Join</button>
      </div>
    </nav>
  );
};

export default Navbar;
