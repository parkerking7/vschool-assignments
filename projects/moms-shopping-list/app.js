$("#button").click(function(){
	$(".groceries").append("<li> <button>x</button> " + $("#groceryType").val() + "</li>");
});
$(".groceries").on("click", "button", function(){
	$(this).parent().remove();
})