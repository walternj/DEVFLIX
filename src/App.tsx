import React from 'react'

import Routes from './routes'
import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
      <Footer />
    </>
  );
};

export default App
