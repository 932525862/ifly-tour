import React from 'react';
import LazyLoad from 'react-lazyload';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import your images
import Australia from '../../../assets/a-1.jpeg';
import Dubai from '../../../assets/d-1.jpg';
import Island from '../../../assets/i-1.jpg';
import LosAngeles from '../../../assets/los-1.jpg';
import Tailand from '../../../assets/t-1.jpg';
import Tokyo from '../../../assets/t-2.jpg';
import Turkia from '../../../assets/tur-3.jpg';

import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  // Array of images for the slider
  const images = [
    {
      img: Tokyo,
      title: t('title-1'),
      subtitle: t('subtitle1'),
    },
    {
      img: Island,
      title: t('title-2'),
      subtitle: t('subtitle2'),
    },
    {
      img: Australia,
      title: t('title-3'),
      subtitle: t('subtitle3'),
    },
    {
      img: Dubai,
      title: t('title-4'),
      subtitle: t('subtitle4'),
    },
    {
      img: LosAngeles,
      title: t('title-5'),
      subtitle: t('subtitle5'),
    },
    {
      img: Tailand,
      title: t('title-6'),
      subtitle: t('subtitle6'),
    },
    {
      img: Turkia,
      title: t('title-7'),
      subtitle: t('subtitle7'),
    },
  ];

  return (
    <div className="relative border w-full h-auto" id="hero">
      {/* Swiper Slider */}
      <LazyLoad height={200} offset={100}>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-screen w-full"
        >
          {images.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full text-center text-white px-4 sm:px-6">
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 sm:mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </LazyLoad>

      {/* Cards Section */}
      <div className="container mx-auto px-5 py-10">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-xl shadow-lg border w-full backdrop-blur-xl">
            <h3 className="text-xl font-semibold mb-4">{t('heading-1')}</h3>
            <p className="text-zinc-400 dark:text-white">{t('paragriph-1')}</p>
          </div>

          <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-xl shadow-lg border w-full backdrop-blur-xl">
            <h3 className="text-xl font-semibold mb-4">{t('heading-2')}</h3>
            <p className="text-zinc-400 dark:text-white">{t('paragriph-2')}</p>
          </div>

          <div className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-xl shadow-lg border w-full backdrop-blur-xl">
            <h3 className="text-xl font-semibold mb-4">{t('heading-3')}</h3>
            <p className="text-zinc-400 dark:text-white">{t('paragriph-2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
