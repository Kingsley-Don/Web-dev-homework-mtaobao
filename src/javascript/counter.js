var h = document.getElementsByClassName("h")[0];
var m = document.getElementsByClassName("m")[0];
var s = document.getElementsByClassName("s")[0];
function count() {
	var t = new Date();
	var ch = t.getHours();
	var cm = t.getMinutes();
	var cs = t.getSeconds();
	if (cs > 50) {
		s.innerHTML = '0' + (60 - cs);
	} else {
		s.innerHTML = 60 - cs;
	}
	if (cm > 50) {
		m.innerHTML = '0' + (60 - cm);
	} else {
		m.innerHTML = 60 - cm;
	}
	if (cm == 0 && cs == 0) {
		h.innerHTML = '01';
	} else {
		h.innerHTML = '00';
	}
};
setInterval("count()",1000);
