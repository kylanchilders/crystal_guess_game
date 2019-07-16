$(document).ready(function(){

    //Declaring global variables

    var totalToGuess = Math.floor(Math.random() * 100) + 1
    var crystal1 = Math.floor(Math.random() * 10) + 1
    var crystal2 = Math.floor(Math.random() * 10) + 1
    var crystal3 = Math.floor(Math.random() * 10) + 1
    var crystal4 = Math.floor(Math.random() * 10) + 1
    var currentTotal = 0
    var wins = 0
    var losses = 0

    $('#total-to-guess').html(totalToGuess)

    function startGame() {
        totalToGuess = Math.floor(Math.random() * 100) + 1
        crystal1 = Math.floor(Math.random() * 10) + 1
        crystal2 = Math.floor(Math.random() * 10) + 1
        crystal3 = Math.floor(Math.random() * 10) + 1
        crystal4 = Math.floor(Math.random() * 10) + 1
        currentTotal = 0
        $('#current-total').html(currentTotal)
        $('#total-to-guess').html(totalToGuess) 
    }


    $('#start-button').on('click', function() {
        startGame()
    });

    $('#crystal1').on('click', function() {
        currentTotal = currentTotal + crystal1
        $('#current-total').html(currentTotal);
        if (currentTotal > totalToGuess){
            losses++
            $('#losses').html(losses)
            alert("GAME OVER! YOU LOSE!")
            startGame()
        }
        if (currentTotal == totalToGuess){
            wins++
            $('#wins').html(wins)
            alert("YOU WIN! GOOD GAME!")
            startGame()
        }
    });

    $('#crystal2').on('click', function() {
        currentTotal = currentTotal + crystal2
        $('#current-total').html(currentTotal);
        if (currentTotal > totalToGuess){
            losses++
            $('#losses').html(losses)
            alert("GAME OVER! YOU LOSE!")
            startGame()
        }
        if (currentTotal == totalToGuess){
            wins++
            $('#wins').html(wins)
            alert("YOU WIN! GOOD GAME!")
            startGame()
        }
    });

    $('#crystal3').on('click', function() {
        currentTotal = currentTotal + crystal3
        $('#current-total').html(currentTotal);
        if (currentTotal > totalToGuess){
            losses++
            $('#losses').html(losses)
            alert("GAME OVER! YOU LOSE!")
            startGame()
        }
        if (currentTotal == totalToGuess){
            wins++
            $('#wins').html(wins)
            alert("YOU WIN! GOOD GAME!")
            startGame()
        }
    });

    $('#crystal4').on('click', function() {
        currentTotal = currentTotal + crystal4
        $('#current-total').html(currentTotal);
        if (currentTotal > totalToGuess){
            losses++
            $('#losses').html(losses)
            alert("GAME OVER! YOU LOSE!")
            startGame()
        }
        if (currentTotal == totalToGuess){
            wins++
            $('#wins').html(wins)
            alert("YOU WIN! GOOD GAME!")
            startGame()
        }
    });











});