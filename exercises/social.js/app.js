var userInfo = {
	firstName: "Parker",
	lastName: "King",
	age: 19,
	dreamCars: [],
	closestFriends: [
		{
			firstName: "Seth",
			lastName: "Rasmussen",
			age: 19,
			dreamCars: [
				{
					carMake: "Tesla",
					carModel: "Model S",
					carYear: 2017
				},
				{
					carMake: "Cheverolet",
					carModel: "Cruz",
					carYear: 2016
				}
			]
		},
		{
			firstName: "Megan",
			lastName: "Boyle",
			age: 18,
			dreamCars: [
				{
					carMake: "Mercedes",
					carModel: "G Wagon",
					carYear: 2017
				},
				{
					carMake: "Volkswagon",
					carModel: "Bug",
					carYear: 2007
				}
			]
		}
	],
	birthday: function () {
		this.age++;
		console.log(this.age);
	},
	userNameChange: function (newFirstName, newLastName) {
		this.firstName = newFirstName;
		this.lastName = newLastName;
	},

}
userInfo.birthday();
userInfo.userNameChange("Michael", "Scott");
//console.log(userInfo.firstName, userInfo.lastName);
userInfo.dreamCars.push({
	carMake: "Tesla",
	carModel: "Model X",
	carYear: "2017"
});
//console.log(userInfo.dreamCars);
userInfo.closestFriends[1].dreamCars[1].carType = "Convertible";
//console.log(userInfo.closestFriends[1].dreamCars[1]);
userInfo.userHeight = "6 Feet 1 Inch ";
console.log(userInfo);