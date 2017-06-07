(function menuResponsive() {
	var btnMenu = document.getElementById('menu-btn');
	var list = document.getElementById('menu');
	btnMenu.addEventListener("click", function(event){
		event.preventDefault();
		list.classList.toggle('hidden-mobile');
	})	
})();