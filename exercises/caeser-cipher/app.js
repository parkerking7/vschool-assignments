var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

var shift = parseInt(readline.question('How many letters would you like to shift? '));

var newChar= " ";

var alphabet = ("abcdefghijklmnopqrstuvwxyz")

//for char in String

function caesarShift(input, shift) {
	
	var newString = "";
	
	for (var i = 0; i < input.length; i++) {
		
		var char = input[i];
		
		var indexofCharacter = alphabet.indexOf(char);
		
		var newPosition = indexofCharacter + shift;
		
		if (newPosition > 25) {
			
			newPosition = newPosition - 26;
			
		}
		
		var newCharacter = alphabet[newPosition];
		
		if (indexofCharacter == -1){
			
			var newCharacter = char;
			
		}
		// Adds character to the string
		newString += newCharacter;
		
	}
	//Returns the final String
	return newString;
	
}

console.log(caesarShift(input,shift));