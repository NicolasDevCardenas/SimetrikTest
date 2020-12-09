import React from 'react';
import { Provider } from 'react-redux';
import Buscador from './components/Buscador';
import Header from './components/Header';
import Lista from './components/lista';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Buscador />
      <Lista />
    </Provider>
  );
}

export default App;
