var body =$("body");
body.on("click",function(){
    window.location.href = "http://192.168.16.183:3000/menu";
});

// http://192.168.16.183:3000/menu"

var progress = 20;
function progressUp(value) {
  progress = progress + value;
  if(progress <= 100){
     $(".fill").css("height", progress+"%");
  }
}