
var goomba = document.getElementById("goomba-tc");
var bobOmb = document.getElementById("bob-omb-tc");
var cheepCheep = document.getElementById("cheepcheep-tc");

var goombaButton = document.getElementById("goomba-button");
var bobOmbButton = document.getElementById("bob-omb-button");
var cheepCheepButton = document.getElementById("cheep-cheep-button");





goomba.addEventListener("focus", function () {
	if (goomba.value == 12) {
		goomba.value = "";
	}
});
//Click off of it with nothing in it to re-appear
goomba.addEventListener("blur", function () {	
	if (goomba.value == "") {
		goomba.value = 12;
	}
});
bobOmb.addEventListener("focus", function () {
	if (bobOmb.value == 8) {
		bobOmb.value = "";
	}
});
//Click off of it with nothing in it to re-appear
bobOmb.addEventListener("blur", function () {
	if (bobOmb.value == "") {
		bobOmb.value = 8;
	}
});
cheepCheep.addEventListener("focus", function () {
	if (cheepCheep.value == 5) {
		cheepCheep.value = "";
	}
});
//Click off of it with nothing in it to re-appear
cheepCheep.addEventListener("blur", function () {
	if (cheepCheep.value == "") {
		cheepCheep.value = 5;
	}
});

function goombaTotal(){
	var goombaVal = goomba.value;
	return goombaVal * 5;
}

function bobOmbTotal(){
	var bobOmbVal = bobOmb.value;
	return bobOmbVal * 7;
}

function cheepCheepTotal(){
	var cheepCheepVal = cheepCheep.value;
	return cheepCheepVal * 11;
}
function totalPrice(){
	return goombaTotal() + bobOmbTotal() + cheepCheepTotal();
}



goombaButton.addEventListener("click", function(){
	document.getElementById("total-price").textContent = (totalPrice() + " coins");
});
bobOmbButton.addEventListener("click", function(){
	document.getElementById("total-price").textContent = (totalPrice() + " coins");
});
cheepCheepButton.addEventListener("click", function(){
	document.getElementById("total-price").textContent = (totalPrice() + " coins");
});
//if(totalPrice === Nan){
//	return "Only accepts numbers!";
//}