import React, { createContext, useState } from 'react';
import { Header } from './components';
import Main from './components/main';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ToggleModal from './components/toggleModal';
import './i18n'; 
AOS.init();

export const StateContext = createContext({});
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <StateContext.Provider value={{ modalOpen, setModalOpen }}>
      <div className="font-mono">
        <Header />
        <Main />
        <Footer />
        <ToggleModal />
      </div>
    </StateContext.Provider>
  );
};

export default App;
