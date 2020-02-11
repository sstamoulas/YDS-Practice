import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import HomePage from './pages/home-page.component';

import './App.css';

const history = createBrowserHistory();

ReactGA.initialize('UA-158180736-1');

history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname)
  }
);

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
