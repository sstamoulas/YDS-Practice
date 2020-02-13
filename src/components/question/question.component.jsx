import React, { Component } from 'react';

import './question.styles.scss';

class Question extends Component {
  constructor(props) {
    super(props);

    let randomSectionIndex = 0;
    let randomQuestionIndex = 0;

    this.state = {
      data: props.questions,
      randomSectionIndex: randomSectionIndex,
      randomQuestionIndex: randomQuestionIndex,
      showSolution: false,
      textColor: 'black',
    };
  }

  componentDidMount() {
    let bodyTag = document.getElementsByTagName("body")[0];
    let randomColor = this.generateRandomColor();

    bodyTag.style.backgroundColor = randomColor;
  }

  generateRandomNumber = (length) => {
    return parseInt(Math.random() * (length));
  }
  
  generateRandomColor = () => {
    let randomColor = this.generateRandomNumber(0xFFFFFF<<0).toString(16);
    let length = randomColor.length;
    for(let i = 0; i < length; i++) {
      if(length < 6) {
        randomColor = 0 + randomColor;
        length++;
      }
    }

    return ('#' + randomColor);
  }

  handleClick = () => {
    let { questions } = this.state.data[this.state.randomSectionIndex];
    let randomSectionIndex = this.state.randomSectionIndex;
    let randomQuestionIndex = this.state.randomQuestionIndex;
    let bodyTag = document.getElementsByTagName("body")[0];
    let randomColor = this.generateRandomColor();

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
      textColor: 'white',
    });

    bodyTag.style.backgroundColor = 'white';

    setTimeout(() => {
      this.setState({ 
        randomSectionIndex: randomSectionIndex,
        randomQuestionIndex: randomQuestionIndex,
        showSolution: false,
        textColor: 'black',
      });

      bodyTag.style.backgroundColor = randomColor;
    }, 500);
  }

  showSolution = () => {
    this.setState({
      showSolution: true,
    });
  }

  render() {
    let { directions, text, questions } = this.state.data[this.state.randomSectionIndex];
    let { number, answer, question, choices } = questions[this.state.randomQuestionIndex];
    let isDialogue = question.includes('\n');

    return (
      <div className="container">
        <h3 className="text-transition" style={{color: this.state.textColor}}>{number}) Directions: {directions}</h3>
        {
          isDialogue ?
            <p className="text-transition" style={{color: this.state.textColor}} dangerouslySetInnerHTML={{__html: question.replace(/\n/g, '<br/>')}}></p>
          :
          text !== undefined ?
          <div className="text-transition" style={{color: this.state.textColor}}>
            <p>{text}</p>
            <h3>{question}</h3>
          </div>
          : 
          <h3 className="text-transition" style={{color: this.state.textColor}}>{question}</h3>
        }
        {
          choices.map((choice, index) => (
            <li key={index} className="text-transition" style={{color: this.state.textColor}}>{choice}</li>
          ))
        }
        <span className={this.state.showSolution ? 'active solution' : 'not-active solution'} >Answer: {choices[answer]}</span>
        <div className="center-content">
          <button className="btn" onClick={this.showSolution}>Show Solution</button>
          <button className="btn" onClick={this.handleClick}>New Question</button>
        </div>
      </div>
    );
  }
}

export default Question;