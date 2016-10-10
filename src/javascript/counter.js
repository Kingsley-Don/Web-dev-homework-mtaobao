var h = document.getElementsByClassName("h")[0];
var m = document.getElementsByClassName("m")[0];
var s = document.getElementsByClassName("s")[0];
function count() {
	var t = new Date();
	var ch = t.getHours();
	var cm = t.getMinutes();
	var cs = t.getSeconds();
	if (cs > 49) {
		s.innerHTML = '0' + (59 - cs);
	} else {
		s.innerHTML = 59 - cs;
	}
	if (cm > 49) {
		m.innerHTML = '0' + (59 - cm);
	} else {
		m.innerHTML = 59 - cm;
	}
	if (cm == 0 && cs == 0) {
		h.innerHTML = '01';
	} else {
		h.innerHTML = '00';
	}
};
setInterval("count()",1000);
