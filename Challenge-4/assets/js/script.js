//https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/
//2:39:00   web APIs Day 3
//// // youtube.com  channel: Florin Pop   Video:simple countdown timer with javaScript-Day 21
// console.log(updateCountdown)

var countdownEl = document.getElementById('Countdown');

//question will be asked
const question = [{
  id: 0,
  Q: "what is question number 1",
  A: [{ text: "one", isCorrect: false },
  { text: "two", isCorrect: false },
  { text: "three", isCorrect: true },
  { text: "four", isCorrect: false }
  ]
},
{
  id: 1,
  Q: "what is question number 2",
  A: [{ text: "one", isCorrect: false },
  { text: "two", isCorrect: false },
  { text: "three", isCorrect: true },
  { text: "four", isCorrect: false }
  ]
},
{
  id: 2,
  Q: "what is question number 3",
  A: [{ text: "one", isCorrect: false },
  { text: "two", isCorrect: false },
  { text: "three", isCorrect: true },
  { text: "four", isCorrect: false }
  ]
},
{
  id: 3,
  Q: "what is question number 4",
  A: [{ text: "one", isCorrect: false },
  { text: "two", isCorrect: false },
  { text: "three", isCorrect: true },
  { text: "four", isCorrect: false }
  ]
},
{
  id: 4,
  Q: "what is question number 5",
  A: [{ text: "one", isCorrect: false },
  { text: "two", isCorrect: false },
  { text: "three", isCorrect: true },
  { text: "four", isCorrect: false }
  ]
}
]
// set start
var start = true;

//Iterate
function iterate(id) {
  //result display section
  var result = document.getElementsByClassName("result");
  // getting question
  const question = document.getElementById("question");
  // setting question text
  question.innerText = questions[id].q;
  // getting the options
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');
  // providing option text
  op1.innerText = question[id].a[0].text
  op1.innerText = question[id].a[1].text
  op1.innerText = question[id].a[2].text
  op1.innerText = question[id].a[3].text
  // providing the true or false value
  op1.value = question[id].a[0].isCorrect;
  op1.value = question[id].a[1].isCorrect;
  op1.value = question[id].a[2].isCorrect;
  op1.value = question[id].a[3].isCorrect;
  op1.value = question[id].a[4].isCorrect;

  var selected = "";
}
function Countdown() {
  var intervalId = setInterval(function () {
    TimerValue--;
    TimerValue.TextContent = TimerValue;

    if (TimerValue === 0 && gamestatus === true) {
      clearInterval(intervalId);
      gamestatus = false;
      TimerValue = initialTimer;
    }

  })
}

function Abutton() {
  console.log('click A');
  if (quizQuestions[randomNumber].correctAnswer == "A") {
    answerResultEl.TextContent = "correct"
    startSequence();
  } else {
    TimerValue = (TimerValue - timerPenalty);
    TimeEl.TextContent = TimerValue;
    answerResultEl.TextContent = "wrong,-" + timerPenalty + "deducted time"
    startSequence();
  }
}
function Bbutton() {
  console.log('click B');
  if (quizQuestions[randomNumber].correctAnswer == "B") {
    answerResultEl.TextContent = "correct"
    startSequence();
  } else {
    TimerValue = (TimerValue - timerPenalty);
    TimeEl.TextContent = TimerValue;
    answerResultEl.TextContent = "wrong,-" + timerPenalty + "deducted time"
    startSequence();
  }
}
function Cbutton() {
  console.log('click C');
  if (quizQuestions[randomNumber].correctAnswer == "C") {
    answerResultEl.TextContent = "correct"
    startSequence();
  } else {
    TimerValue = (TimerValue - timerPenalty);
    TimeEl.TextContent = TimerValue;
    answerResultEl.TextContent = "wrong,-" + timerPenalty + "deducted time"
    startSequence();
  }
}
function Dbutton() {
  console.log('click D');
  if (quizQuestions[randomNumber].correctAnswer == "D") {
    answerResultEl.TextContent = "correct"
    startSequence();
  } else {
    TimerValue = (TimerValue - timerPenalty);
    TimeEl.TextContent = TimerValue;
    answerResultEl.TextContent = "wrong,-" + timerPenalty + "deducted time"
    startSequence();
  }
}





var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

function changeBlue(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}

function changePurple(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: #601A4A"
  );
}

function changeOrange(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: #EE442F; color: white;"
  );
}

// outer.addEventListener("click", changePurple);
// inner.addEventListener("click", changeOrange);
// button.addEventListener("click", changeBlue);
