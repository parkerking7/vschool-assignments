var classObjects = {
		objectInfo: [
			{
				objectName: "Wireless-Keyboard",
				objectColor: "White",
				objectContents: ["Batteries"],
				isWorking: true,
				objectWorking: function () {
					if (this.isWorking === true) {
						console.log("Pick it up!");
					} else {
						console.log("Thank you for being clean!")
					}
				}
},
			{
				objectName: "Mouse",
				objectColor: "White",
				objectContents: ["batteries"],
				isWorking: true,
				objectWorking: function () {
					if (this.isWorking === true) {
						console.log("There is noproblem!");
					} else {
						console.log("Make sure thebatteries are working!");
					}
				}
},
			{
				objectName: "Laptop Case",
				objectColor: "Gray",
				objectContents: ["Macbook!"],
				isWorking: true,
				objectWorking: function () {
					if (this.isWorking === true) {
						console.log("Great to seethat...");
					} else {
						console.log("How are youseeing this?");
					}
				}

},
			{
				objectName: "Projector",
				objectColor: "Gray",
				objectContents: "Mechanical things",
				isWorking: true,
				objectWorking: function () {
					if (this.isWorking === true) {
						console.log("Nice job Eric!");
					} else {
						console.log("Nice jobEric...");
					}
				}
},
			{
				objectName: "Laptop",
				objectColor: "Space-gray",
				objectContents: "All the files",
				isWorking: true,
				objectWorking: function () {
					if (this.isWorking === true) {
						console.log("Glad to see that");
					} else {
						console.log("Well you're dead :/");
					}
				}

		}

	]

	}
	//console.log(classObjects.objectInfo.length);
function objectTest(objectName) {
	for (var i = 0; i < classObjects.objectInfo.length; i++) {
		if (classObjects.objectInfo[i].objectName === objectName && classObjects.objectInfo[i].isWorking) {
			console.log("The " + objectName + " is working!");
		}

	}
}





objectTest("Wireless-Keyboard");