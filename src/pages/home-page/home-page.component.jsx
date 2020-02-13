import React from 'react';
import { Link } from "react-router-dom";

import './home-page.styles.scss';

const HomePage = ({ exams }) => (
  <div className="homepage">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {
        exams.map(exam => (
          <li key={`${exam}`}>
            <Link to={`${exam}`}>{exam.split('-').join(' ')} Exam</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default HomePage;