import React, { Component } from 'react';

import './question.styles.scss';

import DATA from './question.data.js';

class Question extends Component {
  constructor() {
    super();

    this.state = {
      data: DATA,
      randomSectionIndex: 0,
    };
  }

  componentDidMount() {
    let randomSectionIndex = parseInt(Math.random() * (this.state.data.length));
    this.setState({ randomSectionIndex: randomSectionIndex });
  }

  handleClick = () => {
    let randomSectionIndex = parseInt(Math.random() * (this.state.data.length));
    this.setState({ randomSectionIndex: randomSectionIndex });
  }

  render() {
    let { directions, text, questions } = this.state.data[this.state.randomSectionIndex];
    let randomQuestionIndex = parseInt(Math.random() * (questions.length));
    let { answer, question, choices } = this.state.data[this.state.randomSectionIndex].questions[randomQuestionIndex];
    let isDialogue = question.includes('\n');

    return (
      <div className="container">
        <h3>Directions: {directions}</h3>
        {
          isDialogue ?
            <p dangerouslySetInnerHTML={{__html: question.replace(/\n/g, '<br/>')}}></p>
          :
          text !== undefined ?
          <div>
            <p>{text}</p>
            <h3>{question}</h3>
          </div>
          : 
          <h3>{question}</h3>
        }
        {
          choices.map((choice, index) => (
            <li key={index}>{choice}</li>
          ))
        }
        <span>{answer}</span>
        <button onClick={this.handleClick}>New Question</button>
      </div>
    );
  }
}

export default Question;