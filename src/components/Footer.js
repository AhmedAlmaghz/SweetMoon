import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white" id='footer'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* قسم نموذج التواصل */}
        <div id='contacts'>
          <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none"
            />
            <textarea
              placeholder="رسالتك"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary hover:shadow-lg transition duration-300"
            >
              إرسال
            </button>
          </form>
        </div>

        {/* قسم طرق الاتصال */}
        <div>
          <h3 className="text-lg font-bold mb-4">طرق الاتصال</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="fas fa-phone-alt ml-2"></i>
              <span>الهاتف/وآتس : 078 48 28 78 -00967</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope ml-2"></i>
              <span>البريد الإلكتروني: SweetMoon@gmail.com</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt ml-2"></i>
              <span>العنوان: اليمن - صنعاء</span>
            </li>
          </ul>
          {/* روابط الشبكات الاجتماعية */}
          <br />
          <br/>
          <h3 className="text-lg font-bold mx-4">تابعنا على</h3>
          <div className="flex justify-center md:justify-start space-x-4" dir='ltr'>
            <a href="https://facebook.com/sweetmoon" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/sweetmoon" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/sweetmoon" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://tiktok.com/@sweetmoon" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://youtube.com/sweetmoon" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://wa.me/+967782848078" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://whatsapp.com/channel/0029VaqX0WP96H4WHuNZAI16" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-whatsapp"></i> القناة
            </a>
          </div>
        </div>

        <div className="text-center md:text-right" id='about'>
          <div className="flex items-center">
            <img src="/images/logo/logo.png" alt="SweetMoon Logo" className="ml-4 h-full" width={50} />
            <div className="flex-1">
              <h3 className="text-lg font-bold mx-2">SweetMoon سويت مون</h3>
              <h6 className="font-bold mb-4">غذائك المضمون..!</h6>
            </div>
          </div>
          <p>سويت مون هو مشروع رائد في تقديم منتجات غذائية متميزة تجمع بين الجودة العالية والتصميم الأنيق. نلتزم باستخدام أفضل المواد الأولية المتوفرة في السوق لتقديم تجربة غذائية فريدة تلبي احتياجات عملائنا وتفوق توقعاتهم.</p>
        </div>

        <div className="mt-8 text-center text-gray-500">
          &copy; 2024 SweetMoon. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;