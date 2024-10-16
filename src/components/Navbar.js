import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-20 transition-all duration-300 ${
        scroll ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4" dir="ltr">
        <div className="flex items-center">
          <img src="/images/logo/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className={`text-2xl font-bold ${
        scroll ? 'text-red-800' : 'text-gray-100'}`}>SweetMoon</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-800 hover:text-red-600">
            <FaBars size={24} />
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex md:space-x-6 font-bold ${
        scroll ? 'text-red-800' : 'text-gray-100'
      } ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <Link to="/contact" className="hover:text-gray-900 transition-colors duration-200">
              تواصل معنا
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-900 transition-colors duration-200">
              من نحن
            </Link>
          </li>
          <li>
            <a href="/locations" className="hover:text-gray-900 transition-colors duration-200">
              أماكن التواجد
            </a>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-900 transition-colors duration-200">
              المنتجات
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-900 transition-colors duration-200">
              الرئيسية
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;