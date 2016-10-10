function dprfunc(){
	var dpr = window.devicePixelRatio;
	document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend','<meta name="viewport" content="width=device-width,initial-scale=' + 1 / dpr +',minimum-scale=' + 1 / dpr +',maximum-scale=' + 1 / dpr +',user-scalable=no" />');
}
function width() {
	var clientWidth = document.documentElement.clientWidth;
	document.getElementsByTagName('html')[0].style.fontSize = clientWidth / 10 + 'px';
}
dprfunc();
width();