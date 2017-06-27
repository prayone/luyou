// var targetUrl = 'http://'+location.hostname + (location.port ? ":" + location.port : "");
var localURL = 'http://'+location.hostname + (location.port ? ":" + location.port : "");
var targetUrl = "http://192.168.1.189:9000";

function hashchangehandler() {
    var hash = window.location.hash || '#pages/home.html';
    hash = hash.replace("#", "");
    divLoadPage(hash);
    scroll(0, 0);
    hash = hash.replace("pages/", "");
    hash = hash.substring(0, hash.indexOf('.'));
}
function onMenuClick(url) {
    location.hash = url;
        hashchangehandler();
}
function divLoadPage(url) {
    $.get(url, function (result) {
        console.log(result)
        $("#page-wrapper").html(result);
    });
}
function initSession() {
            // $(.cont-txt).css("display","none")
            $(window).bind('hashchange', hashchangehandler);
            hashchangehandler();//window onload的时候调加载了
}
String.prototype.GetValue = function (parm) {
    var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
    var r = this.substr(this.indexOf("\?") + 1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

