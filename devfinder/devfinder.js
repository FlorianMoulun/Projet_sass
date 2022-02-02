let button = document.querySelector('.dark_mode')
let buttons = document.querySelector('.light_mode')
let main = document.querySelector('#main')
let input = document.querySelector('#input')
let section = document.querySelector('#section')
let info = document.querySelector('.info')
let text = document.querySelectorAll('p')
button.addEventListener('click', function(){
	document.body.style.backgroundColor = "#141D2F";
	main.style.backgroundColor = "#1E2A47";
	input.style.backgroundColor = "#1E2A47";
	section.style.backgroundColor = "#1E2A47";
	info.style.backgroundColor = "#141D2F";
	input.style.color = "#fff";
	text.forEach(element=> element.style.color= "#fff");
	buttons.style.display = "flex";
	button.style.display = "none";

})

buttons.addEventListener('click', function(){
	document.body.style.backgroundColor = "#F6F8FF";
	main.style.backgroundColor = "#FEFEFE";
	input.style.backgroundColor = "#fff";
	input.style.color = "#000";
	section.style.backgroundColor = "#fff";
	info.style.backgroundColor = "#F6F8FF ";
	text.forEach(element=> element.style.color= "#000");

	button.style.display = "flex";
	buttons.style.display = "none";

})

window.addEventListener('load', function(){
	button.style.display = "flex";

})

