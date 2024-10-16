import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = [
        { slug: 'ajwa', name: 'تمر العجوة الفاخر', image: '/images/products/ajwa.jpg', price: '10000', category: 'dates' },
        { slug: 'dubai-chocolate', name: 'شوكولاتة سويت مون الراقية', image: '/images/products/chocolate.jpg', price: '500', category: 'chocolate' },
        { slug: 'khalas', name: ' تمر محشي فول سوداني مغطى بالسمسم', image: '/images/products/khalas.jpg', price: '2000', category: 'date-products' },
      ];
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const renderProducts = (category) => {
    return products
      .filter(product => category === 'all' || product.category === category)
      .map((product) => (
        <div
          key={product.slug}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.price}</p>
            <Link
              to={`/product/${product.slug}`}
              className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-secondary transition"
            >
              تفاصيل المنتج
            </Link>
          </div>
        </div>
      ));
  };

  return (
    <>
      <HeroSection />

      <section id="products" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">منتجاتنا الفاخرة</h2>
          <div className="mb-8">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-2 ${activeTab === 'all' ? 'bg-primary text-white' : 'bg-white text-primary'}`}>الجميع</button>
            <button onClick={() => setActiveTab('dates')} className={`px-4 py-2 ${activeTab === 'dates' ? 'bg-primary text-white' : 'bg-white text-primary'}`}>التمور</button>
            <button onClick={() => setActiveTab('date-products')} className={`px-4 py-2 ${activeTab === 'date-products' ? 'bg-primary text-white' : 'bg-white text-primary'}`}>منتجات التمور</button>
            <button onClick={() => setActiveTab('chocolate')} className={`px-4 py-2 ${activeTab === 'chocolate' ? 'bg-primary text-white' : 'bg-white text-primary'}`}>الشوكلاتة الفاخرة</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {renderProducts(activeTab)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;