
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
    console.log(question[questionIndex].answer)
    
    // the questions and answers in their own boxes
    var currentQuest = document.querySelector("#question");
    var choice1 = document.querySelector("#choice1");
    var choice2 = document.querySelector("#choice2");
    var choice3 = document.querySelector("#choice3");
    var choice4 = document.querySelector("#choice4");
    currentQuest.textContent = package[questionIndex].quest;
    choice1.textContent = package[questionIndex].choices[0];
    choice2.textContent = package[questionIndex].choices[1];
    choice3.textContent = package[questionIndex].choices[2];
    choice4.textContent = package[questionIndex].choices[3];
    
}

function questionClick (event){
    var clickbutton = event.target
    if (clickbutton.textContent == package[questionIndex].answer){
        document.getElementById("feedback").textContent = "Right"
        var points = (questionIndex + 1)
        var currentPoints = parseInt(points)
        score += currentPoints  
        scorePlace.textContent = score
        // console.log(points)
        // console.log(currentPoints)
        // console.log(score)
        questionIndex++
        if (secondsLeft <=0 || questionIndex === package.length){
            endQuiz();
        }
        else{
            nextQuestion();
        }
    }
}
function endQuiz(){
    // to be completed
}

document.querySelector("#highscore")
document.querySelector("#choice1").addEventListener("click", questionClick)
document.querySelector("#choice2").addEventListener("click", questionClick)
document.querySelector("#choice3").addEventListener("click", questionClick)
document.querySelector("#choice4").addEventListener("click", questionClick)
// answer1.addEventListener("click", startQuiz)
// WHEN I click the start button
            // // THEN a timer starts and I am presented with a question
            function setTime() {
                // Sets interval in variable
                var timerInterval = setInterval(function() {
                    secondsLeft--;
                    timer.textContent = secondsLeft ;
                    
                    if(secondsLeft === 0) {
        //     // Stops execution of action at set interval
        clearInterval(timerInterval);
        //     // Calls function to create and append image
        //     sendMessage();
    }
    // console.log(secondsLeft)
}, 1000);
}

// Create a function to compare answers

// Create a function to start a timer 

// Create a function to calculate a score 


