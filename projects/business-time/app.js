var dropDown = document.getElementById("dLabel");

dropDown.addEventListener("click", dropDownFunction());


function dropDownFunction() {
	$('.dropdown-toggle').dropdown();
}

$("#submit").click(function () {
	
	alert(`Thank you for your donation`);
	
});