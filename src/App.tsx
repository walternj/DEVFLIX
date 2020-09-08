import React from 'react'

import Home from './pages/Home/index'
import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyles />
      <Footer />
    </>
  );
};

export default App
