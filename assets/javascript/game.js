const pinkCrystal_div = document.getElementById("btn1");
const clearCrystal_div = document.getElementById("btn2");
const purplerystal_div = document.getElementById("btn3");
const multiCrystal_div = document.getElementById("btn4");
var wins = 0;
var losses = 0;
var userScore = 0;

$( document ).ready(function(){


// random computer number to get to
var computerScore = Math.floor(Math.random() * (102) + 19);
    console.log(computerScore); 
$('#computerScore').text("Match This Score: " + computerScore);


// random number for button 
var btn1 = Math.floor(Math.random() * (11) + 1);
var btn2 = Math.floor(Math.random() * (11) + 1);
var btn3 = Math.floor(Math.random() * (11) + 1);
var btn4 = Math.floor(Math.random() * (11) + 1);

console.log("This is a random btn 1 number ====", btn1);
console.log("This is a random btn 2 number ====", btn2);
console.log("This is a random btn 3 number ====", btn3);
console.log("This is a random btn 4 number ====", btn4);


//resets the game
function reset(){
    computerScore =0;
    userScore = 0;
    btn1 = Math.floor(Math.random() * (11) + 1);
    btn2 = Math.floor(Math.random() * (11) + 1);
    btn3 = Math.floor(Math.random() * (11) + 1);
    btn4 = Math.floor(Math.random() * (11) + 1);
    console.log("This is a random btn 1 number ====", btn1);
    console.log("This is a random btn 2 number ====", btn2);
    console.log("This is a random btn 3 number ====", btn3);
    console.log("This is a random btn 4 number ====", btn4);
    computerScore = Math.floor(Math.random() * (102) + 19);
    console.log(computerScore);
    $('#userScore').text("Your Current Score: " + userScore);
    $('#computerScore').text("Match This Score: " + computerScore);
}

// win function to add to scoreboard
function win(){
    wins++;
    $("#wins").text("wins: " + wins);
    // reward(); //gif reward here
    reset();
}

// // when player guesses right number they get a gif 
// function reward(){
//     var modal = buildRewardModal();
//     $("#game-app").append(modal);
// }

// function buildRewardModal (){
//     var modal = $("<div class='reward-modal'>");
//     var messageContainer = $("<div class='reward-modal-message'>");
//     var imageContainer = $("<div class='reward-image-container'>");
//     var buttonContainer = $("<div class='reward-modal-button-container'>");

//     var message = $("<span>").text("Congratulations! You Won!");
//     messageContainer.append(message);

//     var image = $("<img src='assets/images/tiffanysbox.gif'>");
//     imageContainer.append(image);

//     var button = $("<button>").text("Thank You!");
//     buttonContainer.append(button);
//     button.on(click,reset); // tutor helped with this part but it's not right (need to )

//     modal.append(messageContainer, imageContainer, buttonContainer);
//     return modal;
// }

// loss function to add to scoreboard
function loss(){
    losses++;
    $("#losses").text("losses: " + losses);
    reset();
}
// jQuery gem button 1 with functions to add to score
$("#btn1").on("click", function(){
    userScore = (userScore + btn1);
    $('#userScore').text("Your Current Score: " + userScore);

    if (userScore === computerScore) {
        win();
    }else if (userScore > computerScore) {
        loss();
    }
})


// jQuery gem button 2 with functions to add to score
$("#btn2").on("click", function(){
    userScore = userScore + btn2;
    $('#userScore').text("Your Current Score: " + userScore);

    if (userScore === computerScore) {
        win();
    }else if (userScore > computerScore) {
        loss();
    }
})


// jQuery gem button 3 with functions to add to score
$("#btn3").on("click", function(){
    userScore = userScore + btn3;
    $('#userScore').text("Your Current Score: " + userScore);

    if (userScore === computerScore) {
        win();

    }else if (userScore > computerScore) {
        loss();
    }
})


// jQuery gem button 4 with functions to add to score
$("#btn4").on("click", function(){
    userScore = userScore + btn4;
    $('#userScore').text("Your Current Score: " + userScore);

    if (userScore === computerScore) {
        win();
    }else if (userScore > computerScore) {
        loss();
    }
})

})