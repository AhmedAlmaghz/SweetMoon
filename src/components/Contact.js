import React from 'react';
import HeroSection from './HeroSection';

const Contact = () => {
  return (
    <>
    <HeroSection />
    
    <section id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">تواصل معنا</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition duration-300"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition duration-300"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="رسالتك"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition duration-300"
          >
            إرسال
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Contact;