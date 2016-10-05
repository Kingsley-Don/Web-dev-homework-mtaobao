var dpr = window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale=' + 1 / dpr +',minimum-scale=' + 1 / dpr +',maximum-scale=' + 1 / dpr +',user-scalable=0" />')
var clientWidth = document.documentElement.clientWidth;
document.getElementsByTagName('html')[0].style.fontSize = clientWidth / 10 + 'px';