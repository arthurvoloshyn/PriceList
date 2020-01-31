import React from 'react';

import Price from './containers/Price';
import Header from './components/Header';

import './style/normalize.css';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Price />
  </div>
);

export default App;
