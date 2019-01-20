var body = $("body");
var progress = 0;

function progressUp(value) {
  progress = progress + value;
  if (progress <= 100) {
    $(".fill").css("height", progress + "%");
  }
}

function intervalFunc() {
  progressUp(1);
  $("#current_steps").text(progress * 50);
}

setInterval(intervalFunc, 2250);

body.on("click", function () {
  progressUp(20);
  clearInterval(intervalFunc);
  window.location.href = "http://192.168.16.183:3000/menu?steps=" + (progress * 5);
});

// http://192.168.16.183:3000/menu"


