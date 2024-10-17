import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Australia from '../../../assets/a-1.jpeg';
import Dubai from '../../../assets/d-1.jpg';
import Island from '../../../assets/i-1.jpg';
import LosAngeles from '../../../assets/los-1.jpg';
import Tailand from '../../../assets/t-1.jpg';
import Tokyo from '../../../assets/t-2.jpg';
import Turkia from '../../../assets/tur-3.jpg';
import Paris from '../../../assets/p-1.jpg';
import { StateContext } from '../../../App';
import { useTranslation } from 'react-i18next';

const Tours = () => {
  const { t, i18n } = useTranslation();
  const { modalOpen, setModalOpen } = useContext(StateContext);
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  const tourData = [
    {
      country: t('tour-country-1'),
      title: t('tour-title-1'),
      description: t('tour-description-1'),
      backgroundImage: Paris,
      contact: 'tour-contact',
    },
    {
      country: t('tour-country-3'),
      title: t('tour-title-2'),
      description: t('tour-description-2'),
      backgroundImage: Tokyo, // Corrected image import
      contact: t('tour-contact'),
    },
    {
      country: t('tour-country-3'),
      title: t('tour-title-3'),
      description: t('tour-description-3'),
      backgroundImage: Australia, // Added proper image
      contact: t('tour-contact'),
    },
    {
      country: t('tour-country-4'),
      title: t('tour-title-4'),
      description: t('tour-description-4'),
      backgroundImage: Dubai, // Added proper image
      contact: t('tour-contact'),
    },
  ];

  return (
    <div
      className="bg-orange-500 dark:bg-gray-900 dark:text-white w-full h-auto py-20"
      id="tours"
    >
      <div className="container mx-auto px-5 ">
        <h2 className="text-5xl font-bold text-center dark:text-orange-500 text-white mb-14">
          {t('tour-text-heading')}
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          className="p-10"
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {tourData.map((tour, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative bg-center bg-cover rounded-xl shadow-lg overflow-hidden h-96 transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${tour.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
                <div className="relative p-6 flex flex-col justify-end h-full">
                  <h3 className="text-3xl font-semibold text-white mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{tour.description}</p>
                  <button
                    onClick={toggleModal}
                    className="bg-orange-600 text-center inline-block text-white px-4 py-2 rounded-full duration-500 hover:bg-orange-700/60 transition-all"
                  >
                    {tour.contact}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tours;
