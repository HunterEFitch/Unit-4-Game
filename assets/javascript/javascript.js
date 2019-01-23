var randomResult = "";
var runningScore = 0;
var loss = 0;
var win = 0;


resetGame();

$(".crystal").on("click", function () {
    var random = $(this).attr("data-value");
    runningScore = runningScore + parseInt(random);
    $("#userScoreCounter").text(runningScore);
    audio.play();
    audio.currentTime = 0;
    checkScore();
});

function checkScore() {
    if (runningScore === randomResult) {
        alert("You Win!")
        $("#winsCounter").text(++win);
        resetGame();
    }

    if (runningScore > randomResult) {
        alert("You lose!")
        $("#lossCounter").text(++loss);
        resetGame();
    }
}

function resetGame() {
    randomResult = Math.floor(Math.random() * 20) + 30;
    runningScore = 0;

    $(".crystal").each(function () {
        var random = Math.floor(Math.random() * 9) + 1;
        $(this).attr("data-value", random);
    });

    $("#randomTargetCounter").text(randomResult);
    $("#userScoreCounter").text(runningScore);
}


