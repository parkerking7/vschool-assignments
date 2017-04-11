var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/animals");


var animalTypeArr = ["Amphibian", "Land Animal", "Unkown"]

var animalSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	isExtinct: Boolean,
	animalType: {
		type: String,
		required: true,
		enum: animalTypeArr
	},
	canFly: Boolean,
	color: String
});

var Animal = mongoose.model("Animal", animalSchema);

var myAnimal = new Animal({
	name: "Horse",
	isExtinct: false,
	animalType: "Land Animal",
	canFly: false,
	color: "brown"
})

myAnimal.save(function (err, new_animal) {
	console.log(new_animal);
})
