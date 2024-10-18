import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const FlightBookingForm = () => {
  const { t, i18 } = useTranslation();
  // Define state for each input
  // Sample JSON data for countries
  const countries = [
    { code: 'US', name: t('countries__name-1') },
    { code: 'CA', name: t('countries__name-2') },
    { code: 'GB', name: t('countries__name-3') },
    { code: 'UZ', name: t('countries__name-4') },
    { code: 'DE', name: t('countries__name-5') },
    { code: 'FR', name: t('countries__name-6') },
    { code: 'IT', name: t('countries__name-7') },
    { code: 'CN', name: t('countries__name-8') },
    { code: 'JP', name: t('countries__name-9') },
    { code: 'RU', name: t('countries__name-10') },
  ];
  const [fullName, setFullName] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [departureCountry, setDepartureCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [email, setEmail] = useState('');
  const [telegramNick, setTelegramNick] = useState('');
  const [instagramNick, setInstagramNick] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const botToken = import.meta.env.VITE_REACT_APP_BOT_TOKEN;
  const chatId = import.meta.env.VITE_REACT_APP_CHAT_ID;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedMessage = `
      *Yangi rezervatsiya:*\n
      *Ism:* ${fullName}\n
      *Telefon 1:* ${phone1}\n
      *Telefon 2:* ${phone2}\n
      *Qaysi davlatdan:* ${departureCountry}\n
      *Qaysi davlatga:* ${destinationCountry}\n
      *Ketish sanasi:* ${departureDate}\n
      *Qaytish sanasi:* ${returnDate}\n
      *Email:* ${email}\n
      *Telegram Nick:* ${telegramNick || "Yo'q"}\n
    
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: formattedMessage.trim(),
      });

      toast.success('Rezyervatsiya muvaffaqiyatli yuborildi!');
    } catch (error) {
      toast.error('Xatolik... Iltimos, qaytadan urinib ko‘ring.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white ">
      <ToastContainer className="z-50" />
      <div className="relative z-10 flex items-center justify-center p-4 bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-5">
          <div className="bg-white dark:bg-orange-500 rounded-2xl shadow-2xl p-8 w-full">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              {t('heading__flight')}
            </h2>
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('count__label-name')}
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-4 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder={t('count__username_placeholder-1')}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('count__label-name-2')}
                </label>
                <input
                  type="text"
                  value={phone1}
                  onChange={(e) => setPhone1(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder={t('count__username_placeholder-2')}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('count__label-name-3')}
                </label>
                <input
                  type="text"
                  value={phone2}
                  onChange={(e) => setPhone2(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder={t('count__username_placeholder-2')}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('count__label-name-4')}
                </label>
                <select
                  value={departureCountry}
                  onChange={(e) => setDepartureCountry(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">{t('select__name')}</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('count__label-name-5')}
                </label>
                <select
                  value={destinationCountry}
                  onChange={(e) => setDestinationCountry(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">{t('select__name')}</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('count__label-name-6')}
                </label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('count__label-name-7')}
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('count__label-name-9')}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder={t('count__username_placeholder-3')}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('count__label-name-10')}
                </label>
                <input
                  type="text"
                  value={telegramNick}
                  onChange={(e) => setTelegramNick(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder={t('count__username_placeholder-4')}
                />
              </div>
              
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <button
                  type="submit"
                  className="w-full p-4 bg-orange-500 dark:bg-gray-900 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('count__button-1') : t('count__button-2')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingForm;
