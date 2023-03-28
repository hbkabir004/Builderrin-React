
(function ($) {
	'use strict';

	// Day-Night Mode Switcher
	var icon = document.getElementById("mode_switcher");

	if (localStorage.getItem("theme") == "null"){
		localStorage.setItem("theme", "light");
	}

	let localData = localStorage.getItem("theme");

	if (localData == "light") {
		icon.innerHTML = '<span><i class="ion-ios-moon"></i></span>';
		document.body.classList.remove("dark-theme");
	} else if (localData == "dark"){
		icon.innerHTML = '<span><i class="ion-ios-sunny-outline"></i></span>';
		document.body.classList.add("dark-theme");
	}

	icon.onclick = function() {
		document.body.classList.toggle("dark-theme");
		if (document.body.classList.contains("dark-theme")){
			icon.innerHTML = '<span><i class="ion-ios-sunny-outline"></i></span>';
			localStorage.setItem("theme", "dark");
		} else {
			icon.innerHTML = '<span><i class="ion-ios-moon"></i></span>';
			localStorage.setItem("theme", "light");
		}
	}
	

})(jQuery);
