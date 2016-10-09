document.getElementsByTagName("body")[0].onload = function loadingweb(){
	var t = setTimeout(function() {
		document.getElementById("loading").style.display="none";
	}, 1500);
}