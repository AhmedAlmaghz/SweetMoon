import React from 'react';
import Hero from './Hero';
import Products from './Products';
import Locations from './Locations'; // استدعاء مكون "أماكن التواجد"

const Home = () => {
  return (
    <div>
      {/* قسم البطل (Hero Section) */}
      <section id="hero" className="py-16 bg-gray-100">
        <Hero />
      </section>

      {/* قسم المنتجات */}
      <section id="products" className="py-6 bg-gray-100">
        <div className="container mx-auto text-center">
          {/* <h2 className="text-4xl font-bold mb-12 text-gray-800">منتجاتنا الفاخرة</h2> */}
          <Products />
        </div>
      </section>

      {/* قسم أماكن التواجد */}
      <section id="locations" className="py-6 bg-white">
        <div className="container mx-auto text-center">
          {/* <h2 className="text-4xl font-bold mb-12 text-gray-800">أماكن تواجد منتجاتنا</h2> */}
          <Locations /> {/* استدعاء أماكن التواجد */}
        </div>
      </section>
    </div>
  );
};

export default Home;