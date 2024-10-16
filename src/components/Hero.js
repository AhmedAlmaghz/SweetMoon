import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: '/images/hero/slide1.jpg', 
    title: 'أفضل التمور والشوكولاتة الفاخرة',
    description: 'تذوق الفخامة مع كل حبة.',
    buttonText: 'اكتشف منتجاتنا الراقية',
    buttonLink: '/products',
  },
  {
    id: 2,
    image: '/images/hero/slide2.jpg',
    title: 'تمور المدينة المنورة الفاخرة',
    description: ' تمر صحي ولذيذ مليء بالفوائد الغذائية,والخصائص المباركة.',
    buttonText: 'تعرف على المزيد',
    buttonLink: '/products/dates',
  },
  {
    id: 3,
    image: '/images/hero/slide3.jpg',
    title: 'الشوكولاتة البلجيكية الراقية',
    description: 'فن الشوكولاتة مع أجود المكونات.',
    buttonText: 'استمتع بالمذاق الراقي',
    buttonLink: '/products/chocolate',
  },
  {
    id: 4,
    image: '/images/hero/slide4.jpg',
    title: 'منتجات التمور الغنية',
    description: 'دعم التمور بالمزيد من العناصر الغذايئة والفيتمينات والمعادن لصحة وطاقة متجددة',
    buttonText: 'استمتع بالمذاق والصحة الطبيعية',
    buttonLink: '/products/dates',
  },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const { image, title, description, buttonText, buttonLink } = slides[currentSlide];
  
    const goToPreviousSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    return (
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg animate-fade-in">{title}</h1>
          <p className="text-xl text-white mt-4 drop-shadow-lg animate-fade-in-delay">{description}</p>
          <Link
            to={buttonLink}
            className="mt-8 inline-block bg-primary text-white py-3 px-6 rounded-full shadow-lg hover:bg-secondary transition duration-300 animate-bounce"
          >
            {buttonText}
          </Link>
  
          {/* أزرار التنقل */}
          <button
            onClick={goToPreviousSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
          >
            &#10094;
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
          >
            &#10095;
          </button>
        </div>
      </section>
    );
  };

  export default Hero;