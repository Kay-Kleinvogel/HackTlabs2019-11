var body =$("body");
var progress = 10;

function progressUp(value) {
  progress = progress + value;
  if(progress <= 100){
     $(".fill").css("height", progress+"%");
  }
}

function intervalFunc() {
  progressUp(1);
  $("#current_steps").text(progress*50);
}

setInterval(intervalFunc, 250);


//indow.setInterval(progressUp(5), 2000);

// for(var i = 0; i <= 10; i++){
//   console.log("test");
// }

// if(progress >= 100){
//   clearInterval(window.setInterval(progressUp(5), 200));
// }

body.on("click",function(){
  progressUp(20);
  clearInterval(intervalFunc);
  window.location.href = "http://192.168.16.183:3000/menu";
});

// http://192.168.16.183:3000/menu"


