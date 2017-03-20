// Normal Functions



document.getElementById("bigSquare").addEventListener("mouseover", hoverFunction);

function hoverFunction() {
	document.getElementById("bigSquare").className = "blue-square";
}

document.getElementById("bigSquare").addEventListener("mousedown", mouseDownFunction);

function mouseDownFunction() {
	document.getElementById("bigSquare").className = "red-square";
}

document.getElementById("bigSquare").addEventListener("mouseup", mouseUpFunction);

function mouseUpFunction() {
	document.getElementById("bigSquare").className = "yellow-square";
}

document.getElementById("bigSquare").addEventListener("dblclick", dblClickFunction);

function dblClickFunction() {
	document.getElementById("bigSquare").className = "green-square";
}

document.getElementById("body").addEventListener("wheel", wheelFunction);

function wheelFunction() {
	document.getElementById("bigSquare").className = "orange-square";
}


// Keypress functions



document.addEventListener("keydown", function (e) {
	var key = e.which;
	if (key === 66) {
		document.getElementById("bigSquare").className = "blue-square";
	}
});
document.addEventListener("keydown", function (e) {
	var key = e.which;
	if (key === 82) {
		document.getElementById("bigSquare").className = "red-square";
	}
});
document.addEventListener("keydown", function (e) {
	var key = e.which;
	if (key === 89) {
		document.getElementById("bigSquare").className = "yellow-square";
	}
});
document.addEventListener("keydown", function (e) {
	var key = e.which;
	if (key === 71) {
		document.getElementById("bigSquare").className = "green-square";
	}
});
document.addEventListener("keydown", function (e) {
	var key = e.which;
	if (key === 79) {
		document.getElementById("bigSquare").className = "orange-square";
	}
});