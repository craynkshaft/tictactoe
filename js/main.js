var squares = document.getElementsByClassName("square");
var A1 = document.getElementById("A1");
var A2 = document.getElementById("A2");
var A3 = document.getElementById("A3");
var B1 = document.getElementById("B1");
var B2 = document.getElementById("B2");
var B3 = document.getElementById("B3");
var C1 = document.getElementById("C1");
var C2 = document.getElementById("C2");
var C3 = document.getElementById("C3");

var turn = 0;

function myTurn () {
	if (turn % 2 == 0){
		return true;
	} else {
		return false;
	}
}

function win () {
	if (areEqual(A1.value, A2.value, A3.value, "X")||areEqual(B1.value, B2.value, B3.value, "X")||areEqual(C1.value, C2.value, C3.value, "X")||areEqual(A1.value, B1.value, C1.value, "X")||areEqual(A2.value, B2.value, C2.value, "X")||areEqual(A3.value, B3.value, C3.value, "X")||areEqual(A1.value, B2.value, C3.value, "X")||areEqual(A3.value, B2.value, C1.value, "X")){
	alert("X wins");
	} 
}

function areEqual(){
   var len = arguments.length;
   for (var i = 1; i< len; i++){
      if (arguments[i] == null || arguments[i] != arguments[i-1])
         return false;
   }
   return true;
}

function play() {

	A1.onclick=function(){
		if (myTurn() && A1.value == " "){
			this.value = "X";
			myTurn();
			win();
			turn += 1;
		} else if (!myTurn() && A1.value == " "){
			this.value = "O";
			myTurn();
			win();
			turn += 1;
		}
	} 
	
	A2.onclick=function(){
		if (myTurn() && A2.value == " "){
			this.value = "X";
			myTurn();
			win();
			turn += 1;
		} else if (!myTurn() && A2.value == " "){
			this.value = "O";
			myTurn();
			win();
			turn += 1;
		}
	} 
	
	A3.onclick=function(){
		if (myTurn() && A3.value == " "){
			this.value = "X";
			myTurn();
			win();
			turn += 1;
		} else if (!myTurn() && A3.value == " "){
			this.value = "O";
			myTurn();
			win();
			turn += 1;
		}
	}

	B1.onclick=function(){
		if (myTurn() && B1.value == " "){
			this.value = "X";
			myTurn();
			win();
			turn += 1;
		} else if (!myTurn() && B1.value == " "){
			this.value = "O";
			myTurn();
			win();
			turn += 1;
		}
	}

	B2.onclick=function(){
		if (myTurn() && B2.value == " "){
			this.value = "X";
			myTurn();
			win();
			turn += 1;
		} else if (!myTurn() && B2.value == " "){
			this.value = "O";
			myTurn();
			win();
			turn += 1;
		}
	}

	B3.onclick=function(){
		if (myTurn() && B3.value == " "){
			this.value = "X";
			myTurn();
			win();
			turn += 1;
		} else if (!myTurn() && B3.value == " "){
			this.value = "O";
			myTurn();
			win();
			turn += 1;
		}
	}
	C1.onclick=function(){
		if (myTurn() && C1.value == " "){
			this.value = "X";
			myTurn();
			win();
			turn += 1;
		} else if (!myTurn() && C1.value == " "){
			this.value = "O";
			myTurn();
			win();
			turn += 1;
		}
	}

	C2.onclick=function(){
		if (myTurn() && C2.value == " "){
			this.value = "X";
			myTurn();
			win();
			turn += 1;
		} else if (!myTurn() && C2.value == " "){
			this.value = "O";
			myTurn();
			win();
			turn += 1;
		}
	}
	
	C3.onclick=function(){
		if (myTurn() && C3.value == " "){
			this.value = "X";
			myTurn();
			win();
			turn += 1;
		} else if (!myTurn() && C3.value == " "){
			this.value = "O";
			myTurn();
			win();
			turn += 1;
		}
	}
};


/*
//save this for later...taking out the &&'s for now

else if (C3.value == " " && turn % 2 == 0){
		C3.onclick=function(){
			this.value = "X";
			turn += 1;
		}
	} 
*/

myTurn();
play();
