var trashTalking = ["You suck!", "You're the worst!", "I'll be here awhile.", "Cash me outside"]

function randomMessage() {
	return Math.floor(Math.random() * trashTalking.length);
}

$("#submit").click(function () {
	if (name() === false || game() === false || date() === false || score() === "</td>" || score() === "0</td>" ) {
		
		alert("Must enter")
	} else {
		console.log(score());
		$("#scoreTable").append("<tr><td>" +
			name() + game() + date() + score() + ifChecked() + "</tr>");
	}
});

function ifChecked() {
	if (document.forms["scoreTable"]["trash"].checked) {
		return "<td>" + trashTalking[randomMessage()] + "</td>";
	}
}

function name() {
		if (document.forms["scoreTable"]["name"].value === "") {
return false;
		} else {
	return document.forms["scoreTable"]["name"].value + "</td>" + "<td>";
		}
}

function game() {
		if (document.forms["scoreTable"]["game"].value === "") {
			return false;
		} else {
	return document.forms["scoreTable"]["game"].value + "</td>" + "<td>";
		}
}

function date() {
		if (document.forms["scoreTable"]["date"].value === "") {
return false;
		} else {
	return document.forms["scoreTable"]["date"].value + "</td>" + "<td>";
		}
}

function score() {
		if (document.forms["scoreTable"]["game"].value === "") {
			return false;
		} else {
	return document.forms["scoreTable"]["score"].value + "</td>";
		}
}


