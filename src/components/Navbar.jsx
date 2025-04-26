import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", lable: "About" },
    { href: "#translate", label: "Translate" },
    { href: "#contact", label: "Contact Us" },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-small z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
