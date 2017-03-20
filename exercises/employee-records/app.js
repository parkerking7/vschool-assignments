var readlineSync = require("readline-sync");
var employees = [];

function Employee(name, jobTitle, salary, status) {
	this.name = name;
	this.jobTitle = jobTitle;
	this.salary = salary;
	this.status = status || "Full-time";
	this.print = function () {
		console.log("Name: " + this.name + ", " + "Job Title: " + this.jobTitle + ", " + "Salary: " + this.salary + ", " + "Status: " + this.status);
	}
}

var newEmployee = employees.unshift(new Employee("Parker", "Horse", "30,000"));

var newEmployee = employees.unshift(new Employee("Seth", "Cat", "70,000", "Part-time"));

var newEmployee = employees.unshift(new Employee("Megan", "Dog", "51,000", "Contract"));

function employeeSearch(employeeName) {
	for (var i = 0; i < employees.length; i++) {
		if (employees[i].name === employeeName) {
			console.log(employees[i])
		}
	}
}

employees[0].print();
employeeSearch("Parker");