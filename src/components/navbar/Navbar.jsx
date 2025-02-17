import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
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
      <div className="flex items-center gap-4">
        <a href="#" className="text-white">Bantu Pro</a>
        <a href="#" className="text-white">Explore</a>
        <a href="#" className="text-white">English</a>
        <button className="border px-3 py-1 rounded text-white border-white">Sign In</button>
        <button className="bg-white text-customBlue px-3 py-1 rounded">Join</button>
      </div>
    </nav>
  );
};

export default Navbar;
