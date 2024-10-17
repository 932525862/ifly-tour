import React, { createContext, useState, useEffect } from 'react';
import { Header } from './components';
import Main from './components/main';
import Footer from './components/footer';
import loadings from "./assets/loading.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ToggleModal from './components/toggleModal';
import './i18n'; 

AOS.init();

export const StateContext = createContext({});

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Yuklash holati

  useEffect(() => {
    // 3 soniya o'tgach, yuklashni to'xtatamiz
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Komponent o'chirilganda timer ni tozalaymiz
  }, []);

  return (
    <StateContext.Provider value={{ modalOpen, setModalOpen }}>
      <div className="font-mono">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <img src={loadings} alt="iflay" />
          </div>
        ) : (
          <>
            <Header />
            <Main />
            <Footer />
            <ToggleModal />
          </>
        )}
      </div>
    </StateContext.Provider>
  );
};

export default App;

