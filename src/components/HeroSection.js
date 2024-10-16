import React from 'react';

const HeroSection = () => {
    return (

        <section
            className="py-16 text-white"
            style={{ backgroundImage: 'url(/images/hero/SweetMoonHero.jpg)', backgroundSize: 'cover', backgroundPosition: 'bottom' }}
        >
            <div className="container mx-auto text-center py-16">
                <h1 className="text-5xl font-bold mb-4">مرحبا بكم في عالم الفخامة</h1>
                <p className="text-xl">
                    اكتشفوا معنا أجود أنواع التمور والشوكولاتة الفاخرة.
                </p>
            </div>
        </section>

    );
};

export default HeroSection;