
var submitEl = document.querySelector("#submit")
var startButton = document.querySelector("#start")
var timer = document.querySelector("#timeLeft")
var scorePlace = document.querySelector("#scorePlace")

var questionIndex = 0
var score = 0
var initials = document.querySelector("#initialsInput");

var highScores = JSON.parse(localStorage.getItem('highscores')) || [];
var ul = document.getElementById("highScores")


// Create an object with questions and answers
var package = [{
    question: "Who is the richest hero in all of comics?",
    choices:[1,2,3,4],
    answer:1,
},
{
    question: "Who is the richest hero in all of comics?",
    choices:[1,2,3,4],
    answer:1,
},
{
    question: "Who is the richest hero in all of comics?",
    choices:[1,2,3,4],
    answer:1,
},
{
    question: "Who is the richest hero in all of comics?",
    choices:[1,2,3,4],
    answer:1,
},
{
    question: "Who is the richest hero in all of comics?",
    choices:[1,2,3,4],
    answer:1,
},
{
    question: "Who is the richest hero in all of comics?",
    choices:[1,2,3,4],
    answer:1,
},
{
    question: "Who is the richest hero in all of comics?",
    choices:[1,2,3,4],
    answer:1,
}]

// Create Variables for Local storage
// Create a function to save scores in local storage

// Create a function to start the game

function startGame() {
                      
}


var secondsLeft = (package.length*10)

function nextQuestion(){
    console.log(question[questionIndex].corr)
    
    // the questions and answers in their own boxes
    var currentQuest = document.querySelector("#question");
    var answer1 = document.querySelector("#answer1");
    var answer2 = document.querySelector("#answer2");
    var answer3 = document.querySelector("#answer3");
    var answer4 = document.querySelector("#answer4");
    currentQuest.textContent = package[questionIndex].quest;
    answer1.textContent = package[questionIndex].choices[0];
    answer2.textContent = package[questionIndex].choices[1];
    answer3.textContent = package[questionIndex].choices[2];
    answer4.textContent = package[questionIndex].choices[3];
    
}

function questionClick (event){
    var clickbutton = event.target
    if (clickbutton.textContent == question[questionIndex].corr){
        document.getElementById("feedback").textContent = "Right"
        var points = (questionIndex + 1)
        var currentPoints = parseInt(points)
        score += currentPoints  
        scorePlace.textContent = score
        // console.log(points)
        // console.log(currentPoints)
        // console.log(score)
        questionIndex++
        if (secondsLeft <=0 || questionIndex === question.length){
            endQuiz();
        }
        else{
            nextQuestion();
        }
    }


// Create a function to compare answers

// Create a function to start a timer 

// Create a function to calculate a score 


