let homeScore = document.getElementById("score-box-home");
let homeScoreTotal = 0;
let awayScore = document.getElementById("score-box-away");
let awayScoreTotal = 0;
// console.log(homeScore);
// console.log(awayScore);

//home points functions
function addHomePoints(points) {
    // console.log("clicked 2");
    homeScoreTotal += points;
    // console.log(homeScoreTotal);
    homeScore.textContent = homeScoreTotal;
    highestScore();
}

//away points functions
function addAwayPoints(points) {
    // console.log("clicked 2 A");
    awayScoreTotal += points;
    //console.log(awayScoreTotal);
    awayScore.textContent = awayScoreTotal;
    highestScore();
}

//highest score

function highestScore() {
     if (homeScoreTotal > awayScoreTotal) {
        //  console.log("home in lead");
         homeScore.style.color = "green";
         awayScore.style.color = 'black';
     } else if (awayScoreTotal > homeScoreTotal) {
        //  console.log("away in lead");
         awayScore.style.color = "green";
         homeScore.style.color = 'black';
     } else {
         homeScore.style.color = "black";
         awayScore.style.color = "black";
     }
 }

// not called hightestScore() as it is called in the functions above
//reset game

function resetGame() {
    homeScoreTotal = 0;
    homeScore.textContent = 0;
    awayScoreTotal = 0;
    awayScore.textContent = 0;
    homeScore.style.color = "black";
    awayScore.style.color = "black";
}
