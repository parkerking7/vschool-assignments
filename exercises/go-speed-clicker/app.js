var num;

if (localStorage.getItem("clicks")) {
	num = localStorage.getItem("clicks");
	$(document).click(function () {
		num++;
		$("#counter").html("You've clicked : " + localStorage.getItem("clicks"));
		localStorage.setItem("clicks", num);

	});
} else {
	num = 0;
	$(document).click(function () {
		num++;
		$("#counter").html("You've clicked : " + localStorage.getItem("clicks"));
		localStorage.setItem("clicks", num);

	});
}