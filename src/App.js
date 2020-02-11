import React from 'react';
import ReactGA from 'react-ga';

import HomePage from './pages/home-page.component';

import './App.css';

ReactGA.initialize('UA-158180736-1');

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
