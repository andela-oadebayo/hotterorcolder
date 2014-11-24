var guesser = {
  display : document.getElementById("animate"),

  check : function(){
    var guessed_number = document.getElementById("number").value;
    var feedback = document.getElementById("result");
    var clue = document.getElementById("clue");
    
    feedback.value = "Ready";
    // console.log(display);
    // display.className = ("animate");

    //Checking for Wrong Inputs
  if( (guessed_number > 100) || (isNaN(guessed_number) || guessed_number == '') ){
    alert("Pls type a valid number between 1 and 100");
  }
  else{
      //Getting the absolute value of our range
      var b = Math.abs(guessed_number - computerRandom);
      
      //When the user guessed right
      if(guessed_number == computerRandom){
          
          feedback.value = "You guesed right";
          this.display.setAttribute("class", "correct");
          clue.value = "O SHEY !!!";
      }

      //when the range is within the range of  1 - 10: getting hotter
      else if(0 < b && b <= 10){  
        feedback.value = "Getting Hotter";

        //When the range is Less that 3
        if(0 <= b && b <= 3){

          this.display.setAttribute("class", "correct_80");
          clue.value = "Very Very Close";
        }
        //When the range is Less that 5
        else if(0 <= b && b <= 5){
          this.display.setAttribute("class", "correct_50");
          clue.value = "Veryclose";
        }
        //When the range is Less that 7
        else if(0 <= b && b <= 7){
          this.display.setAttribute("class", "correct_30");
          clue.value = "CloseR";
        }
        else{
          this.display.setAttribute("class", "correct_10");
          clue.value = "Close";
        }
      }
      else{ 
        //when the range is within the range of  11-100: getting colder
        feedback.value = "Getting Colder";

        if(11 <= b && b <= 20){
          //when the range is btw 11 - 20
          this.display.setAttribute("class", "wrong_10");
          clue.value = "Far";
        }
        //when the range is btw 21 - 40
        else if(21 <= b && b <= 40){
          this.display.setAttribute("class", "wrong_30");
          clue.value = "Very far";
        }
        //when the range is btw 40 - 60
        else if(41 <= b && b <= 60){
          this.display.setAttribute("class", "wrong_50");
          clue.value = "Very Very far";
        }
        //when the range is btw 61 - 80
        else if (61 <= b && b <= 80){
          this.display.setAttribute("class", "wrong_80");
          clue.value = "Extremely far";
        }
        else{
          this.display.setAttribute("class", "wrong");
          clue.value = "So So Far off";
        }
      }
    }
  }
};

//Getting the random number
var computerRandom = Math.floor((Math.random() * 100) + 1);






