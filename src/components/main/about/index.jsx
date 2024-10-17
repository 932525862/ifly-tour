import React from 'react';
import { FaPlane, FaHotel, FaRoute, FaUserFriends } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import IFLY from '../../../assets/logo.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t, i18 } = useTranslation();
  const testimonials = [
    {
      text: t('text-1'),
      author: t('author-1'),
    },
    {
      text: t('text-2'),
      author: t('author-2'),
    },
    {
      text: t('text-3'),
      author: t('author-3'),
    },
    {
      text: t('text-4'),
      author: t('author-4'),
    },
    {
      text: t('text-5'),
      author: t('author-5'),
    },
  ];

  return (
    <div
      className="bg-orange-500 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold dark:text-orange-500 text-white sm:text-4xl">
            {t('about_heading-1')}
          </h2>
          <p className="mt-4 text-xl text-white dark:text-orange-500">
            {t('about__paragriph-1')}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaPlane className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('about_heading-2')}
            </h3>
            <p className="text-gray-600">{t('about__paragriph-2')}</p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaHotel className="w-12 h-12 text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('about_heading-3')}
            </h3>
            <p className="text-gray-600">{t('about__paragriph-3')}</p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaRoute className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('about_heading-4')}
            </h3>
            <p className="text-gray-600">{t('about__paragriph-4')}</p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaUserFriends className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('about_heading-5')}
            </h3>
            <p className="text-gray-600">{t('about__paragriph-5')}</p>
          </div>
        </div>

        {/* Company history */}
        <div
          className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-[48]"
                src={IFLY}
                alt="Company image"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {t('about-foot-heading')}
              </div>
              <p className="mt-2 text-gray-600">{t('about-foot-paragriph')}</p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 font-medium"
                >
                  {t('about-link')} &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold dark:text-orange-500 text-white mb-4 text-center">
            {t('foot_heading-about')}
          </h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-8 p-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white min-h-40 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                  <p className="italic text-gray-600 mb-4">
                    {testimonial.text.slice(0, 90)}
                  </p>
                  <p className="text-gray-500 text-right">
                    - {testimonial.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
