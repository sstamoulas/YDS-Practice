import React from 'react';
import ReactGA from 'react-ga';

import HomePage from './pages/home-page.component';

import './App.css';

function initializeReactGA() {
    ReactGA.initialize('UA-158180736-1');
    ReactGA.pageview('/homepage');
}

function App() {
  initializeReactGA();
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
