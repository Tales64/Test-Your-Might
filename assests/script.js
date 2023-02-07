
var submitEl = document.querySelector("#submit")
var startButton = document.querySelector("#start")
var timer = document.querySelector("#timeLeft")
var scorePlace = document.querySelector("#scorePlace")

var questionIndex = 0
var score = 0
var initials = document.querySelector("#initialsInput");

var highScores = [];
var scoreList = document.getElementById("highScores")



function localScores() {
    // Clear todoList element and update todoCountSpan
    
  
    // Render a new li for each todo
    for (var i = 0; i < highScores.length; i++) {
        var topScores = highScores[i].initial +" "+ highScores[i].score ;


      var li = document.createElement("li");
      li.textContent = topScores;
      li.setAttribute("topScores", topScores);
  
      scoreList.appendChild(li);
    }
  }

function init() {
  // Get stored todos from localStorage
  var storedScores = JSON.parse(localStorage.getItem("highscores"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedScores !== null) {
    highScores = storedScores;
  }

  // This is a helper function that will render todos to the DOM
  localScores();
}

function storeScores() {
  // Stringify and set key in localStorage to Scores array
  localStorage.setItem("highscores", JSON.stringify(highScores));
}

// Create an object with questions and answers
var package = [{
    question: "Who is the richest hero in all of comics?",
    choices:["Batman","Ironman","Green Arrow","Black Panther"],
    answer:"Black Panther",
},
{
    question: "Who has the most powers?",
    choices:["Superman","Legion","Amazo","Franklin Richards"],
    answer:"Franklin Richards",
},
{
    question: "Who has the most biological parents?",
    choices:["Thor","Cyborg","Wonder Woman","Jubilation Lee"],
    answer:"Thor",
},
{
    question: "Who true name is James Howlet?",
    choices:["Spawn","Invincible","Martian Man Hunter","Wolverine"],
    answer:"Wolverine",
},
{
    question: "Who is a clone of Spider-Man?",
    choices:["Ben Riely","Miles Morales","Black Spider","Oliver Quinn"],
    answer:"Ben Riely",
},
{
    question: "Who can the greatest martial artist in DC?",
    choices:["Batman","Bronze Tiger","Lady Shiva","Karate Kid"],
    answer:"Karate Kid",
},
{
    question: "Who live in a pinnaple under the sea?",
    choices:["Aqua Man","Namor","Black Manta","Gary"],
    answer:"Gary",
}]

// Create Variables for Local storage
// Create a function to save scores in local storage

// Create a function to start the game
startButton.addEventListener("click", function() {
    console.log("Hello")
    setTime();
    startQuiz();
});

var secondsLeft = (package.length*10)

function startQuiz(){
    nextQuestion()
}


function nextQuestion(){
    console.log(package[questionIndex].answer)
    
    // the questions and answers in their own boxes
    var currentQuest = document.querySelector("#question");
    var choice1 = document.querySelector("#choice1");
    var choice2 = document.querySelector("#choice2");
    var choice3 = document.querySelector("#choice3");
    var choice4 = document.querySelector("#choice4");
    currentQuest.textContent = package[questionIndex].question;
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


    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    // THEN I can save my initials and my score
    // 
    // 
    // 
    // 
    // create variables for all the questions in an array
    // create an array for all the potential answers 
    // create variables for all the correct answers
    // create a randomizer to choose questions to dissplay optional
    // create a for loop to continue choosing questions 
    // function saveHighScore(event){
        //     event.preventDefault();
        
        
        
        //     // }
        // }


        // when a user clicks the submit button
submitEl.addEventListener("click", function(event) {
            event.preventDefault();
            
            // put their score in a score object
            var newScore = {
                score: score,
                initial: initials.value.trim()
            };
            
            if (newScore === "") {
                return;
              }
              
              // Add new todoText to todos array, clear the input
            highScores.push(newScore);
            // initialsInput.value = "";
              // **** display that score in one of the LIs
              
              
              
              
              // setTimeout(() => {
                  
                  //     renderMessage();
                  // }, 1000);
                  //console.log(newScore)
                  
                  // add that score object to local storage
        
        storeScores();
        localScores();
        });

console.log(highScores)

    // function renderMessage() {
    //     //newScore = JSON.parse(localStorage.getItem("newScore"));

    //     console.log('highscores line 180',highScores)

    //     for (const element in highScores) {
    //         if (Object.hasOwnProperty.call(highScores, element)) {
    //             const el = highScores[element];
    //             var li = document.createElement("li")

    //             li.appendChild(highScores[x].score  +highScores[x].initial)
    //             console.log(li)
    //             ul.append(li)
    //             console.log(el)
                
    //         }
    //     }
    // }
        
    //     for (let x = 0; x < highScores.length; x++) {
    //         console.log(highScores[x])
            
            
            
    //     }
    //    0
    // }
      
    
    
   
    
        // get all the saved scores and print to page
        // get initials and creat a new highscore limit the number of highscores
        // const scoreLength = ["1","2","3","4","5"]
        // function placeHighScores(){
        //     for (let i = 0; i < scoreLength.length; i++) {
        //     document.querySelector("#highscore")
                
    //     //     }
    //     // }


    init()