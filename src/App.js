import React from 'react';
import ReactGA from 'react-ga';
import {
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/home-page/home-page.component';
import Question from './components/question/question.component';

import './App.css';

import DATA from './components/question/question.data.js';

function initializeReactGA() {
    ReactGA.initialize('UA-158180736-1');
    ReactGA.pageview('/homepage');
}

function App() {
  initializeReactGA();
  const exams = DATA.map(dataItem => dataItem.routeName);
  return (
    <div>
      <Switch>
        {
          DATA.map((dataItem, index) => (
            <Route key={index} path={`/${dataItem.routeName}`}>
              <Question questions={dataItem.items}/>
            </Route>
          ))
        }
        <Route path="/">
          <HomePage exams={exams}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
