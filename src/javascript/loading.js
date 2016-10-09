document.getElementsByTagName("body")[0].onload = function loadingweb(){
	var t = setTimeout(function() {
		document.getElementsByClassName("loading")[0].style.display="none";
	}, 1500);
}