var wordArr = [];

$("#searchBtn").click(function () {
	var searchWord = ($("#search").val().toLowerCase());
	for (var i = 0; i < wordArr.length; i++) {
		if (wordArr[i].name === searchWord) {
			var log = `The word is ${wordArr[i].name} and the definition is ${wordArr[i].definition}`;
			break;
		} else{
			var log = "Not a word"
		}
	} alert(log);
});

$("#addWord").click(function () {
	var newWord = $("#newWord").val().toLowerCase();
	var newDef = $("#definition").val();
	wordArr.push(new newInput(newWord, newDef));
});


function newInput(name, definition) {
	this.name = name;
	this.definition = definition;
}
