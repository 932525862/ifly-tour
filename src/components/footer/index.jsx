import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Logos from '../../assets/logo.png';
const Footer = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const botToken = import.meta.env.VITE_REACT_APP_BOT_TOKEN;
  const chatId = import.meta.env.VITE_REACT_APP_CHAT_ID;
  const onSubmit = async (data) => {
    const email = data.email;

    // Emailni tekshirish
    if (validateEmail(email)) {
      try {
        // Telegram bot API'siga email yuborish

        const message = `New subscription: ${email}`;
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        // console.log(`API Key: ${TELEGRAM__TOKEN}`);
        // console.log(`API URL: ${TELEGRAM__ID}`);
        await axios.post(telegramUrl, {
          chat_id: chatId,
          text: message,
        });

        toast(t('footer__toast-success'));
      } catch (error) {
        console.error('Error sending message to Telegram:', error);
        toast(t('footer__toast-error'));
      }
    } else {
      toast(t('footer__toast-alert'));
    }
  };

  // Emailni validatsiya qilish funksiyasi
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <footer className="dark:bg-gray-900 bg-orange-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              className="w-14 h-14 mb-4"
              src={Logos} // Replace with your logo
              alt="Company logo"
            />
            <p className="text-sm">{t('footer__company-about')}</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blink"
                className="hover:text-gray-900 duration-500 transition-all ease-linear "
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blink"
                className="hover:text-gray-900 duration-500 transition-all ease-linear "
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/ifly.com.uz/"
                target="_blink"
                className="hover:text-gray-900 duration-500 transition-all ease-linear "
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blink"
                className="hover:text-gray-900 duration-500 transition-all ease-linear "
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blink"
                className="hover:text-gray-900 duration-500 transition-all ease-linear "
              >
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {t('heading__links')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="hover:text-gray-900 transition-all duration-500 ease-linear dark:hover:text-orange-300"
                >
                  {t('link-1')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-900 transition-all duration-500 ease-linear dark:hover:text-orange-300"
                >
                  {t('link-4')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all duration-500 ease-linear dark:hover:text-orange-300"
                >
                  {t('link-3')}
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {t('heading__footer')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#tour"
                  className="hover:text-gray-900 transition-all duration-500 ease-linear dark:hover:text-orange-300"
                >
                  {t('footer__name_link-1')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all duration-500 ease-linear dark:hover:text-orange-300"
                >
                  {t('footer__name_link-2')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all duration-500 ease-linear dark:hover:text-orange-300"
                >
                  {t('footer__name_link-3')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 transition-all duration-500 ease-linear dark:hover:text-orange-300"
                >
                  {t('footer__name_link-4')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-2">{t('subscribe')}</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
