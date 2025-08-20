document.getElementsByTagName("h1")[0].style.fontSize = "vw";

//prevent scrolling when gaming:
window.addEventListener('keydown', function (e) {
  const arrows = ['ArrowLeft','ArrowUp','ArrowRight','ArrowDown'];
  if (arrows.includes(e.key)) {
    e.preventDefault(); // stop page scroll
  }
}, { passive: false });

/*
//using JavaScript to resize iframe based on content of snake game
var iframe = document.getElementById('snaker');
iframe.onload = function() {
    var iframeDocument = iframe.contentWindow.document.documentElement;
    iframe.style.height = iframeDocument.scrollHeight + 'px';
};
*/