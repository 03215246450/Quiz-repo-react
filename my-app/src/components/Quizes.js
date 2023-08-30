import React, { useState } from 'react';

var questions = [
  {
    myquestion: "HTML Stands for ______________",
    myoptions: ["Hyper text Markup Language", "HTML", "Document Object Model", "A programming language"],
    mycorrectAnswer: "Hyper text Markup Language",
  },
  {
    myquestion: "CSS Stands for ______________",
    myoptions: ["Designer", "Component", "Cascading Style Sheet", "CSS"],
    mycorrectAnswer: "Cascading Style Sheet",
  },
  {
    myquestion: "RAM Stands for ______________",
    myoptions: ["Random auto", "RAM", "Random Access Memory", "Render any memory"],
    mycorrectAnswer: "Random Access Memory",
  },
  {
    myquestion: "JS Stands for ______________",
    myoptions: ["A programming language", "Renderer", "JavaScript", "JS"],
    mycorrectAnswer: "JavaScript",
  },


  {
    myquestion: "is CSS is Programming Language?",
    myoptions: ["YES", "NO"],
    mycorrectAnswer: "NO",
  },
  {
    myquestion: "is Javascript is Programming Language?",
    myoptions: ["YES", "NO"],
    mycorrectAnswer: "NO",
  },  
  {
    myquestion: "DOM Stands for ______________",
    myoptions: ["Document Orinted Memory", "SQL", "Document object Model", "DOM"],
    mycorrectAnswer: "Document object Model",
  },
  {
    myquestion: "SQL Stands for ______________",
    myoptions: ["Destructured Query Language", "Structured Questions Language", "Structured Query Language", "SQL"],
    mycorrectAnswer: "Structured Query Language",
  },


]

function Quiz() {
    const [QuestionNow, setQuestionNow] = useState(0);
    const [scoreObtained, setScoreObtained] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);


//   const changeQuestion = () => {
//     if (Optionclicked === questions[QuestionNow].mycorrectAnswer) {
//       Scored(scoreObtained + 1);
//     }

//     if (QuestionNow < questions.length - 1) {
//       CurrentmyQuestion(QuestionNow + 1);
//       OptionSetted (""); 
//     } else {
//       alert("Quiz completed  your score is  " + scoreObtained );
//     }
//   }

const changeQuestion = (selectedAnswer) => {
    // Check if the selected answer is correct
    if (questions[QuestionNow].mycorrectAnswer === selectedAnswer) {
      // Update the score if the answer is correct
      setScoreObtained(scoreObtained + 1);
      // Show an alert with the score
      alert(`Correct! Your current score: ${scoreObtained + 1}`);
    } else {
      // Show an alert indicating the answer is incorrect
      alert('Incorrect answer. Try again.');
    }

    // Move to the next question
    if (QuestionNow < questions.length - 1) {
      setQuestionNow(QuestionNow + 1);
    }
  };



  return (
    <div>
      <div className="container">
        <h1 className="text-center m-3 text-white">Quiz App</h1>
      </div>

      <div className="container py-5">
        {QuestionNow < questions.length ? (
          <div className="p-3  ">
            <p className="text-center text-white">
              Question{" "}
              <span id="currentQuestions" className="fs-3 text-white">
                {QuestionNow + 1} / 
              </span>{" "}
              <span id="totalQuestion">{questions.length}</span>
            </p>
            <h2 className='text-white ' id="question">{questions[QuestionNow].myquestion}</h2>
             <div className='gapping'>
            <div className="row" id="Answers">
              <div className="col-md-6">
                <div className="py-3">
                  {questions[QuestionNow].myoptions.map((opti, i) => {
                    return (
                        <button
                        type="button"
                        className="btn text-white btn-dark my-3 w-50"
                        onClick={() => changeQuestion(questions[QuestionNow].myoptions[i])}
                        key={i}
                      >
                        {opti}
                      </button>
                      
                      
                    );
                  })}
                </div>
              </div>
            </div>
            </div>
          </div>
        ) : (
          <div className="p-3 ">
            <h2 className="text-center">Quiz Completed!</h2>
            <p className="text-center">Your Total Score: {scoreObtained} / {questions.length}</p>
          </div>
        )}
      </div>

      <div className="col-md-12 text-center">
        {QuestionNow < questions.length && (
        <button
        onClick={changeQuestion}
        type="button"
        id="NextButton"
        className="btn btn-outline-light my-5 text-center "
      >
        Next
      </button>       )}
      
      </div>
    </div>
  );
}

export default Quiz;

