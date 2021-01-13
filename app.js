const scoreBoard_div = document.querySelector("#scoreboard");
const scissors_div = document.getElementById("s");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");

const scissor = 8;
const rock = 7;
const paper = 6;
/*
scissors_div.addEventListener('scr',  function (){
    console.log("hello world");
})
*/
var choices = [scissor, rock, paper]; 

var pick;
var picky;
var result;
var userScore = 0;
var computerScore = 0;
var user;
var computer;

function scr() {
    result = document.getElementById("thirdttl");
    user = document.getElementById("player-score");
    computer = document.getElementById("computer-score");

    pick = Math.floor(Math.random() * 3);
    picky = choices[pick];
    if(picky == rock){
      result.innerHTML = "Rock Crushes Scissors. You lose!";
     computerScore+=1;
      computer.innerHTML = computerScore;
      result.style.display = "block";
    }
     else if (picky == paper){
        result.innerHTML = "Scissor Cuts Paper. You Won!";
        userScore+=1;
       user.innerHTML = userScore;
        result.style.display = "block";
    } else {
        result.innerHTML = "Tie!";
        result.style.display = "block";
    }
}

function rck() {
    pick = Math.floor(Math.random() * 3);
    picky = choices[pick];
    result = document.getElementById("thirdttl");
    user = document.getElementById("player-score");
    computer = document.getElementById("computer-score");
    if(picky == scissor){
        result.innerHTML = "Paper Covers Rock. You lose!";
        result.style.display = "block";
        computerScore+=1;
        computer.innerHTML = computerScore;
      } else if (picky == 6){
        result.innerHTML = "Rock Smashes Scissor. You won!";
        result.style.display = "block";
        userScore+=1;
        user.innerHTML = userScore;
      } else {
        result.innerHTML = "Tie!";
        result.style.display = "block";
      }
}

function ppr() {
    pick = Math.floor(Math.random() * 3);
    picky = choices[pick];
    result = document.getElementById("thirdttl");
    user = document.getElementById("player-score");
    computer = document.getElementById("computer-score");
    if(picky == 7){
        result.innerHTML = "Paper Covers Rock. You won!";
        result.style.display = "block";
        userScore+=1;
        user.innerHTML = userScore;
      } else if (picky == 8){
        result.innerHTML = "Scissor Cuts Paper. You lose!";
        result.style.display = "block";
        computerScore+=1;
        computer.innerHTML = computerScore;
      } else {
        result.innerHTML = "Tie!";
        result.style.display = "block";
      }
}