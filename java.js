// alert("Work in Progress :D");

$(document).ready(function () {
    var wolf = Math.floor(Math.random() * 12) + 2;
    var panda = Math.floor(Math.random() * 12) + 2;
    var eagle = Math.floor(Math.random() * 12) + 2;
    var tiger = Math.floor(Math.random() * 12) + 2;
    var currentNumber = 0;
    var randomNumber = Math.floor(Math.random() * 101) + 29;
    console.log(randomNumber);
    var wins = 0;
    var losses = 0;
    var userNumber;




    function resetRound() {
        alert("Resetting the Round");
        $("#currentNumber").text(0);
        $("#wolfStart").text("");
        $("#pandaStart").text("");
        $("#eagleStart").text("");
        $("#tigerStart").text("");
        currentNumber = 0;
        wolf = Math.floor(Math.random() * 12) + 2;
        panda = Math.floor(Math.random() * 12) + 2;
        eagle = Math.floor(Math.random() * 12) + 2;
        tiger = Math.floor(Math.random() * 12) + 2;  
        randomNumber = Math.floor(Math.random() * 101) + 29;
        $("#randomNumber").text(randomNumber);        
    }


        $("#randomNumber").append(randomNumber);
    
    
        $("#wolf").on("click", function () {
            currentNumber = currentNumber+wolf;
            $("#currentNumber").text(currentNumber);
            $("#wolfStart").text(wolf); 
            
            if (currentNumber === randomNumber) {
                wins++;
                $("#wins").html(wins);
                alert("YOU WON");
                resetRound();

 
             } else if (currentNumber > randomNumber){
                 losses++;
                 $("#losses").html(losses);
                 alert("YOU LOST");
                 resetRound();
             }
             
             console.log(currentNumber);        
        });
    
        $("#panda").on("click", function () {
            currentNumber = currentNumber+panda;
            $("#currentNumber").text(currentNumber);
            $("#pandaStart").text(panda);
            if (currentNumber === randomNumber) {
                wins++;
                $("#wins").html(wins);
                alert("YOU WON");
                resetRound();

 
             } else if (currentNumber > randomNumber){
                 losses++;
                 $("#losses").html(losses);
                 alert("YOU LOST");
                 resetRound();
             }

            console.log(currentNumber);        
        });
    
        $("#eagle").on("click", function () {
            currentNumber = currentNumber+eagle;
            $("#currentNumber").text(currentNumber);
            $("#eagleStart").text(eagle);
            if (currentNumber === randomNumber) {
                wins++;
                $("#wins").html(wins);
                alert("YOU WON");
                resetRound();

 
             } else if (currentNumber > randomNumber){
                 losses++;
                 $("#losses").html(losses);
                 alert("YOU LOST");
                 resetRound();
             }
 
            console.log(currentNumber);        
        });
    
        $("#tiger").on("click", function () {
            currentNumber = currentNumber+tiger;
            $("#currentNumber").text(currentNumber);
            $("#tigerStart").text(tiger);
            if (currentNumber === randomNumber) {
                wins++;
                $("#wins").html(wins);
                alert("YOU WON");
                resetRound();

 
             } else if (currentNumber > randomNumber){
                 losses++;
                 $("#losses").html(losses);
                 alert("YOU LOST");
                 resetRound();
             }
 
            console.log(currentNumber);        
        });   
                
});




