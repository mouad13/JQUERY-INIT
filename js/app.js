// Step 1
$("#removeDiv").click(function() {
	$("#remove").slideUp();

});

// Step 2
var text = "" ;
$("#setText").keypress(function(){
	text = $("#setText").val();
	$("#needText").text(text);
});








// Step 3