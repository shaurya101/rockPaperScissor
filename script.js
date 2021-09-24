let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p  = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function getComputerScore(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter==='r') return 'Rock';
    if(letter==='p') return 'Paper';
    return 'Scissor';
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userScript = "user".fontsize(3).sub(); //subscripting user
    const compScript = "comp".fontsize(3).sub(); //subcripting user 
    result_p.innerHTML = `${convertToWord(userChoice)}${userScript} beats ${convertToWord(computerChoice)}${compScript}!   You WIN!!!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300); // es6 code replace function() by () and put =>
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userScript = "user".fontsize(3).sub(); //subscripting user
    const compScript = "comp".fontsize(3).sub(); //subcripting user 
    result_p.innerHTML = `${convertToWord(computerChoice)}${compScript} beats ${convertToWord(userChoice)}${userScript}!   You LOSE!!!`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300);
    
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `It is a DRAW!!!`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 300);
    
}

function game(userChoice){
    const computerChoice = getComputerScore();
    switch(userChoice+computerChoice){
        case 'rs':
        case 'pr':
        case 'sp': win(userChoice,computerChoice);
                   break;
        case 'rp':
        case 'sr':
        case 'ps': lose(userChoice, computerChoice);
                   break;
        case 'rr':
        case 'ss':
        case 'pp': draw(userChoice, computerChoice);
                   break;
    }// switch
}


function main(){
    rock_div.addEventListener("click", () => game('r'));
    paper_div.addEventListener("click", () => game('p')) ;
    scissors_div.addEventListener("click", () => game('s'))   
}//main

main();


