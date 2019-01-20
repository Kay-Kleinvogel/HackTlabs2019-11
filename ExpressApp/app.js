
var express = require('express');
var app = express();

// adds "public" directory to the called directories
app.use(express.static("public"));

app.get("/menu",function(reg, res){
    res.render("menu.ejs")
    console.log("User visited /menu");
});

// leave this at the bottom since it's the catch all response
app.get('/*', function (req, res) {
    res.render("splash.ejs")
    console.log("User visited /");
});

// is now only accessible through ip address
app.listen(3000,'192.168.16.183' || 'localhost',function() {
    console.log('Application worker ' + process.pid + ' started...');
  }
  );

