import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation(); // Access i18n instance
  const [isOpen, setIsOpen] = useState(false);

  // List of supported languages
  const languages = [
    { code: 'uz', name: 'Uzbek', icon: 'fi-uz' },
    { code: 'ru', name: 'Russian', icon: 'fi-ru' },
    { code: 'en', name: 'English', icon: 'fi-us' },
  ];

  // Set the default language to Uzbek if not already set
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language'); // Check localStorage for saved language
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage); // Change to saved language
    } else {
      i18n.changeLanguage('uz'); // Default to Uzbek
      localStorage.setItem('language', 'uz'); // Store default language
    }
  }, [i18n]);

  // Get the current selected language object from the languages list
  const selectedLanguage = languages.find((lang) => lang.code === i18n.language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle language change using i18n.changeLanguage
  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode); // Change the language
    localStorage.setItem('language', langCode); // Store the selected language in localStorage
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex justify-center items-center bg-orange-500 text-white w-full px-4 py-2 text-sm font-medium dark:bg-gray-900 border-gray-300 rounded-md"
      >
        {/* Ensure the icon and name of the selected language are displayed */}
        {selectedLanguage && (
          <>
            <span className={`fi ${selectedLanguage.icon} mr-2`} />
            {selectedLanguage.name}
          </>
        )}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 right-0 mt-2 w-44 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <span className={`fi ${lang.icon} mr-2`} />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
