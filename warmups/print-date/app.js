var newDate = new Date();
// Gets date
var weekDay;
// Creates variable used below
switch (newDate.getDay()) {
case 0:
	weekDay = "Sunday"
	break;
case 1:
	weekDay = "Monday"
	break;
case 2:
	weekDay = "Tuesday"
	break;
case 3:
	weekDay = "Wednesday"
	break;
case 4:
	weekDay = "Thursday"
	break;
case 5:
	weekDay = "Friday"
	break;
case 6:
	weekDay = "Saturday"
	break;
}
//Pulls hours out of date
var hours = newDate.getHours();
//var hours = 1;
//pulls minutes out of date
var minutes = newDate.getMinutes();
//var minutes = 9;
//pulls seconds out of date
var seconds = newDate.getSeconds();
//var seconds = 7;
//declares ampm variable
var ampm = hours >= 12 ? "PM" : "AM";
//if statement to see which to use
//if (hours >= 12) {
//	ampm = "PM";
//} else {
//	ampm = "AM";
//}

//Rounds it to a 12 instead of military time
hours = hours % 12;

if (hours === 0) {
	hours = 12;
}
//Adds the 0 if minutes is less that 10

if (minutes < 10) {
	minutes = "0" + minutes;
}
if (seconds < 10) {
	seconds = "0" + seconds;
}
//Logs it!

console.log("Today is: " + weekDay);
console.log("Current time is: " + hours + ":" + minutes + ":" + seconds + " " + ampm);