function twoNumber(num1,num2){
	if (num1 < num2){
		console.log(num1);
	} else {
		console.log(num2);
	}
}
twoNumber(34,33);

function monkeyTrouble(smile1,smile2){
	if((smile1 === true) && (smile2 === true) || (smile1 === false) && (smile2 === false)){
		console.log(true);
	} else {
		console.log(false);
	}
	
}
monkeyTrouble(true, true)// → true  
monkeyTrouble(false, false)// → true  
monkeyTrouble(true, false) //→ false  

var time = new Date();
time = time.getHours();
//time = 0;
function appropriateGretting(time){
	if(time > 5 && time < 12){
		console.log("Good morning!");
	} else if(time < 18 && time > 12){
		console.log("Good Afternoon!");
	} else if (time < 24 && time < 5){
		console.log("Good evening!");
	} else {
		console.log("That is not a time!")
	}
}

appropriateGretting(time);


