import React, {useContext, useEffect, useState} from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {HiBars3} from "react-icons/hi2";
import {IoCloseSharp} from "react-icons/io5";
import {MdOutlineLightMode} from "react-icons/md";
import {RxLightningBolt} from "react-icons/rx";
import LanguageDropdown from "../../dropdownLanguage";
import {useForm} from "react-hook-form";
import axios from "axios";
import {toast} from "react-toastify";
import toggleModal from "../../toggleModal";
import {StateContext} from "../../../App";
import logo from "../../../assets/logo.png";
import {useTranslation} from "react-i18next";

const Navbar = () => {
  // language section of state
  const {t, i18n} = useTranslation();

  // language section of state

  const {modalOpen, setModalOpen} = useContext(StateContext);
  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  // Retrieve initial dark mode state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode === "enabled"; // Default to 'false' if not found
  });

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleBars = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the navbar
  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Effect to handle local storage and body class
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("dark-mode", "enabled");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("dark-mode", "disabled");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrollPosition > 50
          ? "backdrop-blur-lg bg-opacity-10 dark:bg-gray-900/30"
          : ""
      } bg-orange-500 dark:bg-gray-900 shadow fixed w-full left-0 z-50 h-16 transition-all duration-300`}
    >
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="w-14 h-14">
            <img src={logo} className="w-full " alt="site logo" />
          </a>

          <ul className="hidden lg:flex xl:flex 2xl:flex items-center xl:w-[700px] justify-end gap-8">
            <li>
              <a
                href="#hero"
                onClick={closeNavbar}
                className="navbar-item hover:text-white/50 text-zinc-100 font-medium text-[22px] duration-500 dark:text-white"
              >
                {t("link-1")}
              </a>
            </li>
            <li>
              <a
                href="#tours"
                onClick={closeNavbar}
                className="navbar-item hover:text-white/50 text-zinc-100 font-medium text-[22px] duration-500 dark:text-white"
              >
                {t("link-3")}
              </a>
            </li>
            <li>
              <a
                href="#cite"
                onClick={closeNavbar}
                className="navbar-item hover:text-white/50 text-zinc-100 font-medium text-[22px] duration-500 dark:text-white"
              >
                {t("link-2")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeNavbar}
                className="navbar-item hover:text-white/50 text-zinc-100 font-medium text-[22px] duration-500 dark:text-white"
              >
                {t("link-4")}
              </a>
            </li>
            <li>
              <button
                onClick={toggleModal}
                className="navbar-item hover:text-white/50 text-zinc-100 font-medium text-[22px] duration-500 dark:text-white"
              >
                {t("link-5")}
              </button>
            </li>
          </ul>

          <div className="flex justify-between items-center gap-5">
            <ol className="hidden item-center gap-5 justify-between sm:hidden md:flex ">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blink"
                  className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "
                >
                  <FaFacebookF className="h-6 w-6" />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.twitter.com"
                  target="_blink"
                  className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.instagram.com"
                  target="_blink"
                  className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blink"
                  className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blink"
                  className="hover:text-white/50 dark:hover:text-orange-500 text-white duration-500 transition-all ease-linear "
                >
                  <FaYoutube className="h-6 w-6" />
                </a>
              </li>
            </ol>
            <LanguageDropdown />
            <button
              onClick={toggleDarkMode}
              className="text-2xl p-2 rounded-md bg-white duration-500 text-white dark:bg-white dark:text-black"
            >
              {isDarkMode ? (
                <MdOutlineLightMode className="text-orange-500 dark:text-orange-500" />
              ) : (
                <RxLightningBolt className="text-orange-500" />
              )}
            </button>

            <button
              onClick={handleBars}
              className="xl:hidden  md:block  sm:block lg:hidden p-2 rounded-md  bg-white text-gray-900 "
            >
              {isOpen ? (
                <IoCloseSharp className="text-2xl text-orange-500 dark:text-black" />
              ) : (
                <HiBars3 className="text-2xl text-orange-500 dark:text-black " />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed border-orange-500  bg-orange-500 left-0 z-40 top-[60px] duration-1000 transition-opacity dark:bg-gray-900 dark:text-white dark:border-t-gray-900 dark:border-gray-900 text-black shadow w-96 border h-screen">
          <ul className="flex flex-col items-start w-full p-4 gap-2 justify-start">
            <li className="w-full">
              <a
                onClick={closeNavbar}
                href="#hero"
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block "
              >
                {t("link-1")}
              </a>
            </li>
            <li className="w-full">
              <a
                onClick={closeNavbar}
                href="#cite"
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block "
              >
                {t("link-2")}
              </a>
            </li>
            <li className="w-full">
              <a
                onClick={closeNavbar}
                href="#tours"
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block "
              >
                {t("link-3")}
              </a>
            </li>
            <li className="w-full">
              <a
                onClick={closeNavbar}
                href="#about"
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block "
              >
                {t("link-4")}
              </a>
            </li>
            <li className="w-full">
              <button
                onClick={() => {
                  toggleModal();
                  closeNavbar();
                }}
                className="hover:text-white hover:bg-gray-800 text-white w-full text-2xl duration-700 hover:scale-105 transition-all dark:text-white dark:hover:text-[#007bff]  font-medium px-2 py-3  rounded-md inline-block"
              >
                {t("link-5")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
