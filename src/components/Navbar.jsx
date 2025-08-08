import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 bg-opacity-50 text-white px-6 py-1 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <Link to="/back-to-home">
          <img src={logo} alt="GlobalJourney" className="w-32 h-12 mr-2" />
          </Link>
          
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase">
           <Link to="/back-to-home">
          <li className="hover:text-[#FFB703] cursor-pointer">About Us</li>
          </Link>
          <Link to="/continent/Europe">
          <li className="hover:text-[#FFB703] cursor-pointer">What We Offer</li>
          </Link>
          <Link to="/book-free-consult">
          <li className="hover:text-[#FFB703] cursor-pointer">Get In Touch</li>
          </Link>
        </ul>

        {/* Right Side: Language + Currency */}
        <div className="hidden md:flex items-center space-x-6 pr-4">  
          <div className="flex space-x-2 text-sm">
            <span className="cursor-pointer hover:text-[#FFB703] pr-2">EN </span> |
            <span className="cursor-pointer hover:text-[#FFB703]">USD$</span>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] text-white absolute top-full left-0 w-full flex flex-col space-y-4 py-6 text-center">
          <a href="#" className="hover:text-[#FFB703]">About Us</a>
          <a href="#" className="hover:text-[#FFB703]">What We Offer</a>
          <a href="#" className="hover:text-[#FFB703]">Get In Touch</a>
          <div className="flex justify-center space-x-2 text-sm">
            <span className="cursor-pointer hover:text-[#FFB703]">EN</span> |
            <span className="cursor-pointer hover:text-[#FFB703]">USD$</span>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
