import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import { Provider } from 'react-redux'

import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import Header from './components/Header';
import Footer from './components/Footer';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
      <Footer />
    </Provider>
  );
};

export default App
