/*var foodList=['bread','apple','steak','dumpling','rice'];

console.log('original list: ');

foodList.forEach(function(item){
    console.log(item);
})

foodList[1] = 'butter';

console.log('changed list: ');

foodList.forEach(function(item){
    console.log(item);
})
*/
var playerScore = 0.5;

function addScore(playerScore) { // add 1 to the playerScore variable every time the function is called
    playerScore++;
    return playerScore;
}

function displayScore(playerScore) {
    console.log('Now, the score of the player is: ',playerScore);
    return;
}

playerScore=addScore(playerScore);
displayScore(playerScore);

