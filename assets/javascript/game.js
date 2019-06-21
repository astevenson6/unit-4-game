$(document).ready(function () {

    // need an array for 19-120 for randomnumber
    var randomNumberChoice = ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
    // need an array for 1-12 for crystals
    var randomCrystalValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    var randomNumber;
    var crystalNumbers;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;

    // random number selector function for randomnumber
    function chooseRandomNumber() {
        randomNumber = randomNumberChoice[Math.floor(Math.random() * randomNumberChoice.length)];
        $("#randomNumber").html(randomNumber);
    }
    // random number selector function for button-1 - button -4
    // button1
    function buttonOneValue() {
        crystal1 = randomCrystalValue[Math.floor(Math.random() * randomCrystalValue.length)];
        $("#button-1").val(crystal1)
    }
    // button2
    function buttonTwoValue() {
        crystal2 = randomCrystalValue[Math.floor(Math.random() * randomCrystalValue.length)];
        $("#button-2").val(crystal2)
    }
    // button3
    function buttonThreeValue() {
        crystal3 = randomCrystalValue[Math.floor(Math.random() * randomCrystalValue.length)];
        $("#button-1").val(crystal3)
    }
    // button4
    function buttonFourValue() {
        crystal4 = randomCrystalValue[Math.floor(Math.random() * randomCrystalValue.length)];
        $("#button-1").val(crystal4)
    }
    
    // game start function(game restart function)
    function gameRestart() {
        totalScore = 0;
        $("#totalNumber").html(totalScore)
        chooseRandomNumber();
        buttonOneValue();
        buttonTwoValue();
        buttonThreeValue();
        buttonFourValue();

    }

    // Crystal Click Manipulation
    $("#button-1").click(function() {
        totalScore += buttonOneValue;
        $("#totalNumber").html(totalScore);
    });
    // win/loss if else function




    
    chooseRandomNumber();
    buttonOneValue();
    buttonTwoValue();
    buttonThreeValue();
    buttonFourValue();
    console.log(crystal1)
    console.log(crystal2)
    console.log(crystal3)
    console.log(crystal4)













});