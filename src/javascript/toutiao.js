function change() {
	nIntervId = setInterval(toutiaoArray, 2800);
}

function toutiaoArray() {
	var toutiao = document.getElementsByClassName('toutiao-title')[0];
	toutiao.innerHTML = toutiao.innerHTML == "先定个小目标，比如写好淘宝" ? "好烦啊不想写" : "先定个小目标，比如写好淘宝";
}
change();