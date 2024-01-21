import "./index.scss";
import React, { useState } from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({ right }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {right} ответа из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, handleClick, step }) {
  const steps = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${steps}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li step={step} onClick={() => handleClick(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [right, setRight] = useState(0);
  const question = questions[step];

  const handleClick = (index) => {
    if (index === question.correct) {
      setRight(right + 1);
    }
    setStep(step + 1);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} handleClick={handleClick} question={question} />
      ) : (
        <Result right={right} />
      )}

      {/* <Game step={step} handleClick={handleClick} question={question} />
      <Result /> */}
    </div>
  );
}

export default App;
