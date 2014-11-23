display = document.getElementById("animate");


function check(){
	var guessed_number = document.getElementById("number").value;
	var feedback = document.getElementById("result");
	
	feedback.value = "Ready";
	// console.log(display);
	// display.className = ("animate");


	if( (guessed_number > 100) || (isNaN(guessed_number) || guessed_number == '') ){
		alert("Pls type a valid number between 1 and 100");
	}
	else{
		var b = Math.abs(guessed_number - computerRandom);

		 if(guessed_number == computerRandom){
	        
	        feedback.value = "You guesed right";
	        // display.className = ("correct");
	        display.setAttribute("class", "correct");
	    }
	    
	    else if(0 < b && b <= 10){
	        
	        feedback.value = "Getting Hotter" + computerRandom;
	        if(0 <= b && b <= 3){
	        	display.setAttribute("class", "correct_80");
	        }
	        else if(0 <= b && b <= 5){
	        	display.setAttribute("class", "correct_50");
	        }
	        else if(0 <= b && b <= 7){
	        	display.setAttribute("class", "correct_30");
	        }
	        else{
	        	display.setAttribute("class", "correct_10");
	        }
	    }
	    else{
	        
	        feedback.value = "Getting Colder" + computerRandom;
	    }
	}
}


var computerRandom = Math.floor((Math.random() * 100) + 1);

