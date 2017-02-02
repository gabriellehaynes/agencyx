// JavaScript Document

(function(){
	
	var main = document.querySelector('#main');
	var theMenu = document.querySelectorAll('.menu');
	
	function changeElements() {
		main.innerHTML = dynamicContent[this.id].text; 
	}

	
	[].forEach.call(theMenu, function(image) {
		image.addEventListener("click", changeElements, true);
	});

	
	main.text = dynamicContent['home'].text; 
	
})();
