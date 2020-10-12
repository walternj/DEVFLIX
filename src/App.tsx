import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

import {store, persistor} from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </PersistGate>
      <GlobalStyles />
      <Footer />
    </Provider>
  );
};

export default App
