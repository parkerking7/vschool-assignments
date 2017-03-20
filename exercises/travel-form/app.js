document.getElementById("button").addEventListener("click", function () {
	var form = document.getElementById("form");
	var firstName = form.firstName.value;
	var lastName = form.lastName.value;
	var age = form.age.value;
	var gender = form.gender.value;
	var location = form.location.value;
//	var diet = form.diet.value;
	var foods = [];
	for (var i = 0; i < form.foods.length; i++) {
		if (form.foods[i].checked) {
			foods.push(form.foods[i].value);
		}
	}
	var color =form.favcolor.value;
	
	document.getElementById("content").style.backgroundColor = color;
	var output = (`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, Gender: ${gender}, Location: ${location}, Dietary restrictions: ${foods}`);
	alert(output);
});