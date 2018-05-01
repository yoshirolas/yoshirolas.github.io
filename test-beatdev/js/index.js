(function 	(argument) {
	const menuBtn = document.getElementById('menuBtn');
	const menuBtnImg = document.getElementById('menuBtnImg');
	const menuContainer = document.getElementById('menuContainer');
	const body = document.getElementsByTagName('body')[0];
	body.addEventListener("click", closeMenu);
	menuBtn.addEventListener("click", showMenu);
	function showMenu() {
		menuContainer.classList.add("menu-container__show");
	}
	function closeMenu(event) {
		if (event.target !== menuBtn && event.target !== menuBtnImg) {
			menuContainer.classList.remove("menu-container__show");
		}
	}
})();