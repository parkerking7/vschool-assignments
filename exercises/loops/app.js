function strLength(str){
	for (var i = 0; i < str.length; i++){
	console.log(str[i]);
		//console.log("This is being said");
	}
}
strLength("The cat");

function letterFind(str, letter){
	var isCharacterFound = false;
	for(var i =0; i<str.length; i++){
		if (str[i] === letter){
			console.log("Found at: " + i );
			isCharacterFound = true;
			return;
		} 
	} if (isCharacterFound !== true){
		console.log("No character was found!")
	}
}

letterFind("the cat", "z");

function numberArray(arr){
	var isNumberFound = false;
	for(var i = 0; i <arr.length; i++){
		if(arr[i] === 42){
			console.log("Number found, quit out of loop!");
			isNumberFound === true;
			break;
		}
	}
	if(isNumberFound !== true){
		console.log("42 was not found");
	}
}
arr = [4,12,22,66,77,74];
numberArray(arr);
var arr = [24, 17, 15, 12, 1, 11, 10, 72, 4, 6];
var smallest = arr[0];

for (var i = 0; i < arr.length; i++){
	if(arr[i] < smallest){
			smallest = arr[i];
	}
}


console.log(smallest);