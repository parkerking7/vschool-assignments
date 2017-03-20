//var goomba = $("#goomba-tc");
//var bobOmb = $("#bob-omb-tc");
//var cheepCheep = $("#cheepcheep-tc");

//var goombaButton = $("#goomba-button");
//var bobOmbButton = $("#bob-omb-button");
//var cheepCheepButton = $("#cheep-cheep-button");





$("#goomba-tc").focusin(function () {
	if ($("#goomba-tc").val() == 12) {
		$("#goomba-tc").val() = "";
	}
});
//Click off of it with nothing in it to re-appear
$("#goomba-tc").focusout(function () {
	if ($("#goomba-tc").val() == "") {
		$("#goomba-tc").val() = 12;
	}
});
$("#bob-omb-tc").focusin(function () {
	if ($("#bob-omb-tc").val() == 8) {
		$("#bob-omb-tc").val() = "";
	}
});
//Click off of it with nothing in it to re-appear
$("#bob-omb-tc").focusout(function () {
	if ($("#bob-omb-tc").val() == "") {
		$("#bob-omb-tc").val() = 8;
	}
});
$("#cheepcheep-tc").focusin(function () {
	if ($("#cheepcheep-tc").val() == 5) {
		$("#cheepcheep-tc").val() = "";
	}
});
//Click off of it with nothing in it to re-appear
$("#cheepcheep-tc").focusout(function () {
	if ($("#cheepcheep-tc").val() == "") {
		$("#cheepcheep-tc").val() = 5;
	}
});

function goombaTotal() {
	var goombaVal = $("#goomba-tc").val();
	return goombaVal * 5;
}

function bobOmbTotal() {
	var bobOmbVal = $("#bob-omb-tc").val();
	return bobOmbVal * 7;
}

function cheepCheepTotal() {
	var cheepCheepVal = $("#cheepcheep-tc").val();
	return cheepCheepVal * 11;
}

function totalPrice() {
	return goombaTotal() + bobOmbTotal() + cheepCheepTotal();
}

$("#goomba-button").click(function () {
	$("#total-price").text(totalPrice() + " coins");
});
$("#bob-omb-button").click(function () {
	$("#total-price").text(totalPrice() + " coins");
});
$("#cheep-cheep-button").click(function () {
	$("#total-price").text(totalPrice() + " coins");
});
//if(totalPrice === Nan){
//	return "Only accepts numbers!";
//}


$("#goomba-button, #bob-omb-button, #cheep-cheep-button").click(function () {
	$("#coinSound")[0].play();
});


$(document).ready(function () {
	$("#nightMode").click(function () {
		$("#body").toggleClass("body");
		if ($("#nightMode").text() === "Night Mode") {
			$("#nightMode").text("Day Mode");
		} else {
			$("#nightMode").text("Night Mode");
		}
	})
});