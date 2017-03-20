//READING / GETTING

$.get("http://api.vschool.io/parker/todo/", function (response) {
	var todos = response;
	for (var i = 0; i < todos.length; i++) {
		$(".uList").append(`<li data-item-id = ${todos[i]._id}><h1><b>${todos[i].title}</b></h1>
			<p> $ ${todos[i].price}</p> <p><i>
			${todos[i].description}<img src=${todos[i].imgUrl}></i><br><input type='checkbox' name='listItem' value='item'> Completed</p><button class='btn btn-danger delete'>Delete</button></li>`);
	}
});
//Creating / Posting!

$(".btn").click(function () {
	var newObject = {
		"title": document.forms["form"]["name"].value,
		"price": document.forms["form"]["price"].value,
		"description": document.forms["form"]["description"].value,
		"imgUrl": $("#imgUrl").val()
	}
	$.post("http://api.vschool.io/parker/todo/", newObject, function (newObject) {
		$(".uList").append(`<li data-item-id = ${newObject._id}><h1>			  <b>${newObject.title}</b></h1>
			<p> $ ${newObject.price}</p> <p><i>
			${newObject.description}<img src=${newObject.imgUrl}></i><br><input type='checkbox' name='listItem' value='item'> Completed</p><button class='btn btn-danger delete'>Delete</button></li>`);
	});
});


//Deleting / Destroying

$(".uList").on("click", "button", function () {
	var _id = ($(this).parent().attr("data-item-id"));
	$.ajax({
		url: `http://api.vschool.io/parker/todo/${_id}`,
		type: 'DELETE',
		success: function (result) {

		}
	})

	$(this).parent().remove();

});
