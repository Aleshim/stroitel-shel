var buttons = document.querySelectorAll(".item-button");

for (var i=0; i<buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		alert("Вы успешно записались.")
	});
}