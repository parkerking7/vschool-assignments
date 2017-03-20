var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

//

function printLyrics(lyrics) {
	console.log(lyrics.join(" "));
}

printLyrics(lyrics);

function printLyricsReverse(lyrics) {
	console.log(lyrics.reverse().join(" "));
}
printLyricsReverse(lyrics);

var skippedWords = [];

function skipLyrics(lyrics) {
	for (var i = 0; i < lyrics.length; i++) {
		if (i % 2 == 0) {
			skippedWords.push(lyrics[i]);
		}
	}
}

//

skipLyrics(lyrics);

//console.log(skippedWords.toString());

var reversedWords = [];

function reverseEveryTwo(lyrics) {
	for (var i = 0; i < lyrics.length; i++) {
		if (i % 2 == 0) {
			reversedWords.push(lyrics[i]).reverse().toString();
		}
	}
}
console.log(reversedWords);