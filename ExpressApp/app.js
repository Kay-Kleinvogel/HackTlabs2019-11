var contracts = [];

var express = require('express');
var app = express();

// adds "public" directory to the called directories
app.use(express.static("public"));

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/Demo_Transaction_Data.TlabsHack", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
                
});

app.get("/menu",function(reg, res){
    
    res.render("menu.ejs",{
        contracts:contracts
    })
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

