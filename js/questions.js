

//answers array
var quizAnswers = ["a", "b", "c"];

//variables to hold correct/incorrect answers
var correct = 0;
var incorrect = 0;

for (var i = 0; i < 4; i++) {
  //correct answers calculation - might need to rewrite since eq is random
  var correctAnswer = correctAnswers[Math.floor(Math.random() * correctAnswers.length)];
}
var quizQuestions = [
    {
      prompt: "Who invented JavaScript?\n(a)Douglas Crockford\n\(b) Sheryl Sandberg\n(c) Brendan Eich",
      Answer: "c"
    },
  
    {
    prompt: "What does HTML stand for?\n(a)Hyper Text Markup Language\n\(b)Hyperlinks and Text Markup Language\n(c) Home Tool Markup Language",
    Answer: "a"
  },
  {
    prompt: "What does CSS stand for?\n(a)Creative Style Sheets\n\(b) Cascading Style Sheets\n(c) Computer Style Spread",
    Answer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?\n(a) Node.js\n\(b) TypeScript\n(c) npm",
    Answer: "C"
    },
    {
    question: "Which tool can you use to ensure code quality?/n(a) Angular\n\(b)jQuery\n\(b) RequireJS\nz(c) ESLint"
    Answer: "D"
  },
]

var score = 0;

for(var i =0; i <questions.length; i++){
  var response = window.prompt(questions [i].prompt);
  if(response == questions[i].answer){
    score++;
    alert("Correct");
    alert("WRONG!")
  }
}
alert("you got " + score + "/" + questions.length);

//partial increment code: incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });