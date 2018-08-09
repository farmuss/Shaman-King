alert("Work in Progress :D");

$(document).ready(function () {
    var wolf = Math.floor(Math.random() * 11) + 1;
    var panda = Math.floor(Math.random() * 11) + 1;
    var eagle = Math.floor(Math.random() * 11) + 1;
    var tiger = Math.floor(Math.random() * 11) + 1;
    var currentNumber = 0;
    var randomNumber = Math.floor(Math.random() * 101) + 29;
    console.log(randomNumber);
    var wins = 0;
    var losses = 0;

    function resetRound() {
        $("#currentNumber").text(0);
        currentNumber = 0;
        randomNumber = Math.floor(Math.random() * 101) + 29;
        
    }

        $("#randomNumber").append(randomNumber);
    
    
        $("#wolf").on("click", function () {
            currentNumber = currentNumber+wolf;
            $("#currentNumber").text(currentNumber);
            $("#wolfStart").text(wolf); 
            if (currentNumber === randomNumber) {
                resetRound();
                $("#wins").html(wins+1);
                alert("YOU WON");

 
             } else if (currentNumber > randomNumber){
                 $("#losses").html(losses+1);
                 resetRound();
             }
             
             console.log(currentNumber);        
        });
    
        $("#panda").on("click", function () {
            currentNumber = currentNumber+panda;
            $("#currentNumber").text(currentNumber);
            $("#pandaStart").text(panda);
            if (currentNumber === randomNumber) {
               $("#wins").html(wins+1);

            } else if (currentNumber > randomNumber){
                $("#losses").html(losses+1);
            }

            console.log(currentNumber);        
        });
    
        $("#eagle").on("click", function () {
            currentNumber = currentNumber+eagle;
            $("#currentNumber").text(currentNumber);
            $("#eagleStart").text(eagle);
            if (currentNumber === randomNumber) {
                $("#wins").html(wins+1);
 
             } else if (currentNumber > randomNumber){
                 $("#losses").html(losses+1);
             }
 
            console.log(currentNumber);        
        });
    
        $("#tiger").on("click", function () {
            currentNumber = currentNumber+tiger;
            $("#currentNumber").text(currentNumber);
            $("#tigerStart").text(tiger);
            if (currentNumber === randomNumber) {
                resetRound();
                $("#wins").html(wins+1);
                
 
             } else if (currentNumber > randomNumber){
                 $("#losses").html(losses+1);
             }
 
            console.log(currentNumber);        
        });   
                
});




