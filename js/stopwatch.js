//quiz question variables
var quizQuestionIndex = 0;
var time = questions.length *15;
var clockId;

//Declare variable to hold the date and time to countdown to
var countDownDate = new Date("May 10, 2018 12:30:39").getTime();

//Question variables
var startEl = document.getElementById("start");
var quizQuestionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var answersEl = document.getElementById("answers");

  //start quiz, go to first question
  function firstQuestion() {
    var questionOne = document.getElementById("first-question");
    questionOne.setAttribute("class", "class");

    //show questions
    quizQuestions.removeAttribute("class")

  }

  showQuestion();
}

  
//Display Questions
function showQuestion(){
  //get quiz questions
var quizQuestions = questions[quizQuestionsIndex];

//clear old choices?
oldChoices.innerHTML = "";

//loop
quizQuestions.choices.forEach(function(choice, i) {
  //choices
}

//Calculate remaining time
var now = new Date().getTime();
var timeLeft = 300;

var min = Math.floor(timeLeft / 60);
var secs = Math.floor(timeLeft % ((1000 * 60) / 1000));
var interval;
var questionNumber = 0


  // renderCounter();




function clock() {
  //Clock Timer Function
  interval = setInterval(function () {
    timeLeft--;
    min = Math.floor(timeLeft / 60);
    secs = Math.floor(timeLeft % ((1000 * 60) / 1000));


    if (timeLeft > 00) {
      if (secs < 10) {
        document.getElementById("output").innerHTML = min + ":0" + secs;
      } else {
        document.getElementById("output").innerHTML = min + ":" + secs;
      }

      //secs = parseInt(secs) - 1;                
      //timeLeft = setTimeout("clock()", 1000);
    }
    else {

      //Display message when timer is over
      if (min == 0 && secs == 0) {
        document.getElementById("output").innerHTML = min + ":" + secs;
        alert("Time's Up!!");

      }
    }
  }, 1000)



    {
      quizQuestion: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
      },
      correctAnswer: "C"
    },
  ]
}


}



function checkAnswer(answer){
  if( answer == questions[runningQuestion].correct){
      // answer is correct
      score++;
      // change progress color to green
      answerIsCorrect();
  }else{
      // answer is wrong
      // change progress color to red
      answerIsWrong();
  }
  count = 0;
  if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
  }else{
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
  }
}
}

$('#startQuizButton').click(function(){

  var questionList = [
    {
  question: "What does HTML stand for?",
  answers: [
     "Hyper Text Markup Language",
     "Hyperlinks and Text Markup Language",
     "WHome Tool Markup Language"],
    correctAnswer: "A"
  },]
}
/* 
      {
        question: "What does HTML stand for?",
        answers: {
          a: "Hyper Text Markup Language",
          b: "Hyperlinks and Text Markup Language",
          c: "WHome Tool Markup Language",
        },
        correctAnswer: "A"
      },
      {
        question: "What does CSS stand for?",
        answers: {
        a: "Creative Style Sheets",
        b: "CCascading Style Sheets",
        c: "Computer Style Spread",
        },
        correctAnswer: "B"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "C"
        },
        {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "D"
      },
    ]
      }  
 } */
//  {
/* function showQuestions(questions, quizContainer) {
  // code will go here
}
function showResults(questions, quizContainer, resultsContainer) {
  // code will go here
}
// show the questions
showQuestions(questions, quizContainer);
// when user clicks submit, show results
submitButton.onclick = function () {
  showResults(questions, quizContainer, resultsContainer);
}
  }
 */











//Output
// document.getElementById("output").innerHTML = minutes + ":" + seconds;;
//   }






//Define global variables "question one is zero"
/* var questionArray = [
{
{
        question : "What does JS stand for?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
 */

//temp code:     if (distance < 0) {
/*       clearInterval(x);
        document.getElementById("demo");
        demo.value= "EXPIRED";*/)