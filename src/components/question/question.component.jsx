import React, { Component } from 'react';

import './question.styles.scss';

import DATA from './question.data.js';

class Question extends Component {
  constructor() {
    super();

    let randomSectionIndex = 14;
    let randomQuestionIndex = 0;

    this.state = {
      data: DATA,
      randomSectionIndex: randomSectionIndex,
      randomQuestionIndex: randomQuestionIndex,
      showSolution: false,
    };
  }

  handleClick = () => {
    let { directions, text, questions } = this.state.data[this.state.randomSectionIndex];
    let randomSectionIndex = this.state.randomSectionIndex;
    let randomQuestionIndex = this.state.randomQuestionIndex;;

    if((randomSectionIndex + 1) >= this.state.data.length && (randomQuestionIndex + 1) >= questions.length) {
      randomQuestionIndex = 0;
      randomSectionIndex = 0;
    }
    else if((randomQuestionIndex + 1) >= questions.length) {
      randomQuestionIndex = 0;
      randomSectionIndex = randomSectionIndex + 1;
    }
    else {
      randomQuestionIndex = randomQuestionIndex + 1;
    }

    this.setState({ 
      randomSectionIndex: randomSectionIndex,
      randomQuestionIndex: randomQuestionIndex,
      showSolution: false,
     });
  }

  showSolution = () => {
    this.setState({
      showSolution: true,
    });
  }

  render() {
    let { directions, text, questions } = this.state.data[this.state.randomSectionIndex];
    let { number, answer, question, choices } = this.state.data[this.state.randomSectionIndex].questions[this.state.randomQuestionIndex];
    let isDialogue = question.includes('\n');

    return (
      <div className="container">
        <h3>{number})Directions: {directions}</h3>
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
        <span className={this.state.showSolution ? 'active solution' : 'not-active'} >Answer: {choices[answer]}</span>
        <div className="center-content">
          <button className="btn" onClick={this.showSolution}>Show Solution</button>
          <button className="btn" onClick={this.handleClick}>New Question</button>
        </div>
      </div>
    );
  }
}

export default Question;