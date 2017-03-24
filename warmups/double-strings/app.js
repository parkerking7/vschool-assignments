function doubleStrings(strArr){
	var newArr = [];
	for(var i =0; i < strArr.length; i++){
		for(var j=0; j < strArr[i].length; j++){
			if(strArr[i][j] === strArr[i][j - 1]){
				newArr.push(strArr[i]);
				break;
			} 
		} 

	} console.log(newArr);
}

var strArr = ["apple", "house", "dog", "book", "heet", "aada"];

doubleStrings(strArr);