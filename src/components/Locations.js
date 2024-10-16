import React from 'react';
import HeroSection from './HeroSection';

const locations = [
  {
    id: 1,
    store: 'غدرة للتجارة',
    city: 'صنعاء',
    address: 'شارع النصر تقاطع السائلة',
    phone: '011-1234567',
  },
  {
    id: 2,
    store: 'الرجوي للبهارات - فرع جولة عمران',
    city: 'صنعاء',
    address: 'جولة عمران',
    phone: '012-9876543',
  },
  {
    id: 3,
    store: 'الهدى سوبر ماركت',
    city: 'صنعاء',
    address: 'شارع الزبيري - أمام السفارة الصينية',
    phone: '013-8765432',
  },
  {
    id: 4,
    store: 'سوبر ماركت ايربورت',
    city: 'صنعاء',
    address: 'جولة الجمنة',
    phone: '013-8765432',
  },
  {
    id: 5,
    store: 'مجمع الشرق الأوسط',
    city: 'صنعاء',
    address: 'جولة آية',
    phone: '013-8765432',
  },
  {
    id: 6,
    store: 'الحطامي للبهارات',
    city: 'صنعاء',
    address: 'شارع المطار - أمام مطابع الكتاب المدرسي',
    phone: '013-8765432',
  },
  {
    id: 7,
    store: 'العاصمة للبهارات',
    city: 'صنعاء',
    address: 'شارع المطار - أمام محظة العاصمة للمواد البترولية',
    phone: '013-8765432',
  },
  {
    id: 8,
    store: 'سما مول',
    city: 'صنعاء',
    address: 'شارع الخمسين - طريق العشاش',
    phone: '013-8765432',
  },
  {
    id: 9,
    store: 'الرجوي للبهارات - فرع شيرتون',
    city: 'صنعاء',
    address: 'الدائري الشمالي- بعد جولة شيرتون',
    phone: '013-8765432',
  },
  // يمكنك إضافة المزيد من المواقع هنا
];

const Locations = () => {
  return (
    <>

      <HeroSection />
      <section id="locations" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">أماكن تواجد منتجاتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.id} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-2">{location.store}</h3>
                <p className="text-gray-600 mb-2">{location.city} - {location.address}</p>
                <p className="text-gray-600">هاتف: {location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;