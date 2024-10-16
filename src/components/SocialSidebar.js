import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 left-0 bg-white shadow-lg p-2">
      <ul className="flex flex-col space-y-4">
        <li>
          <a href="https://facebook.com/sweetmoon" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaFacebook size={24} />
          </a>
        </li>
        <li>
          <a href="https://x.com/sweetmoon" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={24} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/sweetmoon" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaInstagram size={24} />
          </a>
        </li>
        <li>
          <a href="https://tiktok.com/@sweetmoon" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaTiktok size={24} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+967782848078" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaWhatsapp size={24} />
          </a>
        </li>
        <li>
          <a href="https://whatsapp.com/channel/0029VaqX0WP96H4WHuNZAI16" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaWhatsapp size={24} />القناة
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
