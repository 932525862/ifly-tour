import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import Vetnam from '../../../assets/v-1.jpg';
import Dubai from '../../../assets/d-1.jpg';
import Island from '../../../assets/i-1.jpg';
import Maldiva from '../../../assets/m-1.jpg';
import Tailand from '../../../assets/t-1.jpg';
import Tokyo from '../../../assets/t-2.jpg';
import Turkia from '../../../assets/tur-3.jpg';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { StateContext } from '../../../App';
import { useTranslation } from 'react-i18next';

// Set app element for accessibility
Modal.setAppElement('#root');

const Cite = () => {
  const { t, i18 } = useTranslation();
  // useContext
  const { modalOpen, setModalOpen } = useContext(StateContext);

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  // Data array for the cards
  const countries = [
    {
      img: Tokyo,
      title: t('cite-title-1'),
      description: t('cite-description-1'),
      details: t('cite-details-1'),
      population: t('cite-population-1'),
      districts: t('cite-districts-1'),
      cities: t('cite-cities-1'),
      currency: t('cite-currency-1'),
    },
    {
      img: Island,
      title: t('cite-title-2'),
      description: t('cite-description-2'),
      details: t('cite-details-2'),
      population: t('cite-population-2'),
      districts: t('cite-districts-2'),
      cities: t('cite-cities-2'),
      currency: t('cite-currency-2'),
    },
    {
      img: Vetnam,
      title: t('cite-title-3'),
      description: t('cite-description-3'),
      details: t('cite-details-3'),
      population: t('cite-population-3'),
      districts: t('cite-districts-3'),
      cities: t('cite-cities-3'),
      currency: t('cite-currency-3'),
    },
    {
      img: Dubai,
      title: t('cite-title-4'),
      description: t('cite-description-4'),
      details: t('cite-details-4'),
      population: t('cite-population-4'),
      districts: t('cite-districts-4'),
      cities: t('cite-cities-4'),
      currency: t('cite-currency-4'),
    },
    {
      img: Maldiva,
      title: t('cite-title-5'),
      description: t('cite-description-5'),
      details: t('cite-details-5'),
      population: t('cite-population-5'),
      districts: t('cite-districts-5'),
      cities: t('cite-cities-5'),
      currency: t('cite-currency-5'),
    },
    {
      img: Tailand,
      title: t('cite-title-6'),
      description: t('cite-description-6'),
      details: t('cite-details-'),
      population: t('cite-population-6'),
      districts: t('cite-districts-6'),
      cities: t('cite-cities-6'),
      currency: t('cite-currency-6'),
    },
    {
      img: Turkia,
      title: t('cite-title-7'),
      description: t('cite-description-7'),
      details: t('cite-details-7'),
      population: t('cite-population-7'),
      districts: t('cite-districts-7'),
      cities: t('cite-cities-7'),
      currency: t('cite-currency-7'),
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCardClick = (country) => {
    setSelectedCountry(country);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCountry(null);
  };

  // Card animation using react-spring
  const springProps = useSpring({
    to: { opacity: 1, transform: 'scale(1)' },
    from: { opacity: 0, transform: 'scale(0.9)' },
    config: { tension: 200, friction: 15 },
  });

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="container mx-auto py-20 px-5  font-mono" id="cite">
      <h1 className="text-center text-4xl font-bold mb-8" data-aos="fade-up">
        {t('cite_heading')}
      </h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {countries.map((country, index) => (
          <animated.div
            style={springProps}
            key={index}
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(country)}
            data-aos="zoom-in" // AOS attribute for card animation
          >
            <div
              className="relative h-48 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${country.img})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{country.title}</h2>
              <p className="mt-2 text-gray-200">{country.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <button className="text-sm bg-white text-black rounded px-4 py-1">
                  {t('button-name')}
                </button>
              </div>
            </div>
          </animated.div>
        ))}
      </div>

      {/* Modal for additional information */}
      {selectedCountry && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Country Details"
          className="fixed inset-0 font-mono flex items-center justify-center bg-black/70 p-6"
        >
          <div className="bg-white dark:bg-gray-900 dark:text-white p-8 rounded-lg max-w-2xl h- text-center">
            <div className="relative">
              <img
                src={selectedCountry.img}
                alt={selectedCountry.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
                style={{ filter: 'grayscale(50%) brightness(80%)' }} // Adding gradient filter effect
              />
            </div>
            <h2 className="text-3xl font-bold mb-4">{selectedCountry.title}</h2>
            <p className="text-lg mb-4">{selectedCountry.details}</p>
            <p>
              <strong>{t('cites-strong-1')}</strong>{' '}
              {selectedCountry.population}
            </p>
            <p>
              <strong>{t('cites-strong-2')}</strong> {selectedCountry.districts}
            </p>
            <p>
              <strong>{t('cites-strong-3')}</strong> {selectedCountry.cities}
            </p>
            <p>
              <strong>{t('cites-strong-4')}</strong> {selectedCountry.currency}
            </p>
            <div className="mt-6 flex justify-between gap-4 items-center">
              <button
                onClick={closeModal}
                className="bg-gray-500 w-full text-center text-white py-2 px-4 rounded-lg"
              >
                {t('button-name-1')}
              </button>
              <button
                onClick={toggleModal}
                className="bg-gray-500 w-full text-center text-white py-2 px-4 rounded-lg"
              >
                {t('button-name-2')}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cite;
