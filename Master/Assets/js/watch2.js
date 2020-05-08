//Declare variable to hold the date and time to countdown to
var countDownDate = new Date("May 10, 2018 12:30:39").getTime();
//Create one second interval for timer

var secondsLeft = 300;
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Remaining Time.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}


//Calculate remaining time
var now = new Date().getTime();
var timeLeft = countDownDate - now;

var min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
var secs = Math.floor((timeLeft % (1000 * 60)) / 1000); 


//Clock Timer Function
function clock() {
  if (parseInt(secs) > 00) {

  document.getElementById("clock").innerHTML = min + "0:" + secs;
        sec = parseInt(secs) - 1;                
        tim = setTimeout("clock()", 1000);
    }
    else {

//Display message when timer is over
  if (parseInt(min)==0 && parseInt(sec)==0){
    document.getElementById("output").innerHTML = minutes + ":" + seconds;
    alert("Time Up");
    } 1000;
}
}


  


//Output
// document.getElementById("output").innerHTML = minutes + ":" + seconds;;
//   }




//Create start questions, add function printQuestions at line 25, add the question itself and choices into dom, 
/* printQuestions();
} */

//Define global variables "question one is zero"
/* [
{
question : "What does HTML stand for?",

        choiceA : "Correct",

        choiceB : "Wrong",

        choiceC : "Wrong",

        correct : "A"

    },{

        question : "What does CSS stand for?",

        imgSrc : "img/css.png",

        choiceA : "Wrong",

        choiceB : "Correct",

        choiceC : "Wrong",

        correct : "B"

    },{

        question : "What does JS stand for?",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        correct : "C"
 */
       /*const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
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

//temp code:     if (distance < 0) {
      clearInterval(x);
        document.getElementById("demo");
        demo.value= "EXPIRED";
    }
*/