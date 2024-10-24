import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import HeroSection from './HeroSection';

const ProductPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/pages/products/${slug}.md`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();

        const metaDataRegex = /---\n([\s\S]*?)\n---/;
        const metaDataMatch = text.match(metaDataRegex);

        if (metaDataMatch) {
          const metaData = metaDataMatch[1]
            .split('\n')
            .reduce((acc, line) => {
              const [key, value] = line.split(': ');
              acc[key.trim()] = value ? value.trim() : ''; // Ensure value is not undefined
              return acc;
            }, {});

          setMetadata(metaData);
          setContent(text.replace(metaDataRegex, '').trim());
        } else {
          setContent(text.trim());
        }
      } catch (err) {
        setError(true);
      }
    };

    fetchProduct();
  }, [slug]);

  if (error) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">المنتج غير موجود</h1>
        <p className="text-gray-600 mb-6">المنتج الذي تحاول الوصول إليه غير موجود. قد يكون تم حذفه أو لم يتم إضافته بعد.</p>
        <button
          className="mt-4 bg-primary text-white py-2 px-4 rounded-full hover:bg-secondary transition"
          onClick={() => navigate('/')}
        >
          العودة إلى الصفحة الرئيسية
        </button>
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <section
        className="py-16 text-white"
        style={{
          backgroundImage: `url(${metadata.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="container mx-auto text-center py-16">
          <h1 className="text-5xl font-bold mb-4">{metadata.title}</h1>
          <p className="text-xl">{metadata.description}</p>
        </div>
      </section>

      <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold mb-6 animate-fade-in-up">{metadata.title || 'تفاصيل المنتج'}</h1>

        {metadata.image && (
          <img
            src={metadata.image}
            alt={metadata.title}
            className="w-full h-64 object-cover mb-6 rounded-lg transform transition-transform duration-700 hover:scale-105 animate-fade-in-up"
            loading="lazy"
          />
        )}

        <div className="prose animate-fade-in-up">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default ProductPage;