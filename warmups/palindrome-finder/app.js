function isPalindrome(str) {
	var remove = /[^a-z]/g;
	str = str.toLowerCase().replace(remove, '');
	var reversedStr = str.split("").reverse().join("");
	
	if(str === reversedStr){
		return true;
	} else{
		return false;
	}
}

console.log(isPalindrome("Star Rats!"));  // true  
console.log(isPalindrome("palindrome"));  // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true  
