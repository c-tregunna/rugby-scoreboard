let homeScore = document.getElementById("score-box-home");
let homeScoreTotal = 0;
let awayScore = document.getElementById("score-box-away");
let awayScoreTotal = 0;
// console.log(homeScore);
// console.log(awayScore);

//home score buttons
let home2Points = document.getElementById("h-two-points");
let home3Points = document.getElementById("h-three-points");
let home5Points = document.getElementById("h-five-points");

//away score buttons
let away2Points = document.getElementById("a-two-points");
let away3Points = document.getElementById("a-three-points");
let away5Points = document.getElementById("a-five-points");

//home points functions
function addHome2Points() {
    // console.log("clicked 2");
    homeScoreTotal += 2;
    // console.log(homeScoreTotal);
    homeScore.textContent = homeScoreTotal;
    highestScore();
}

function addHome3Points() {
    // console.log("clicked 3");
    homeScoreTotal += 3;
    //console.log(homeScoreTotal);
    homeScore.textContent = homeScoreTotal;
    highestScore();
}

function addHome5Points() {
    // console.log("clicked 5");
    homeScoreTotal += 5;
    //console.log(homeScoreTotal);
    homeScore.textContent = homeScoreTotal;
    highestScore();
}

//away points functions
function addAway2Points() {
    // console.log("clicked 2 A");
    awayScoreTotal += 2;
    //console.log(awayScoreTotal);
    awayScore.textContent = awayScoreTotal;
    highestScore();
}

function addAway3Points() {
    // console.log("clicked 3 A");
    awayScoreTotal += 3;
    //console.log(awayScoreTotal);
    awayScore.textContent = awayScoreTotal;
    highestScore();
}

function addAway5Points() {
    // console.log("clicked 5 A");
    awayScoreTotal += 5;
    // console.log(awayScoreTotal);
    awayScore.textContent = awayScoreTotal;
    highestScore();
}


//highest score

function highestScore() {
     if (homeScoreTotal > awayScoreTotal) {
         console.log("home in lead");
         homeScore.style.color = "green";
         awayScore.style.color = 'black';
     } else if (awayScoreTotal > homeScoreTotal) {
         console.log("away in lead");
         awayScore.style.color = "green";
         homeScore.style.color = 'black';
     } else {
         homeScore.style.color = "black";
         awayScore.style.color = "black";
     }
 }
 
highestScore();//styles work, need to get the totals to


//reset game

let restButton = document.getElementById("new-game");


function resetGame() {
    homeScoreTotal = 0;
    homeScore.textContent = 0;
    awayScoreTotal = 0;
    awayScore.textContent = 0;
    homeScore.style.color = "black";
    awayScore.style.color = "black";
}   
