document.getElementsByTagName("h1")[0].style.fontSize = "vw";

//using JavaScript to resize iframe based on content of snake game
var iframe = document.getElementById('snaker');
iframe.onload = function() {
    var iframeDocument = iframe.contentWindow.document.documentElement;
    iframe.style.height = iframeDocument.scrollHeight + 'px';
};