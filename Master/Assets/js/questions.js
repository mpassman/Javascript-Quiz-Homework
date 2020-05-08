//Question Elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const myQuestions = document.getElementById("myQuestions");
const qImg = document.getElementById("qImg");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//Quiz Questions


Let myQuestions = [
    {
      question: "Who invented JavaScript?",
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich,"
      correctAnswer: "C"
      }
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];
  
  