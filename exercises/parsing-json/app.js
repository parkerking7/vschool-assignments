$("#get-data").click(function () {
	$.get("http://api.vschool.io:6543/pokemon.json", function (result) {
		console.log(result);
		for (var i = 0; i < result.objects[0].pokemon.length; i++) {
			var list = document.createElement("li");
			var object = document.createTextNode(result.objects[0].pokemon[i].name);
			list.appendChild(object);
			document.getElementById("list").appendChild(list);
			
		}
	});
});