var contracts = [
    {
        GUID:"ce2b4753-dd64-4e30-8063-2194814d982f",
        owner:"9c3fc7bd-3feb-4c9d-9770-e40d5991ba90",
        recipient:"a1624e68-d048-4d05-9255-a85aa5293a67",
        contract_name:"doctor",
        frequency:"30",
        start_date:"2018-01-01",
        end_date:"2020-01-01"
    },
    {
        GUID:"e7818820-a0c6-4d17-a103-739bbc05d399",
        owner:"c35ee732-fa57-4d18-9707-9b0712c0cfde",
        recipient:"9e2c6878-66c4-4118-a800-e34fda655626",
        contract_name:"insurance",
        frequency:"364",
        start_date:"2018-01-01",
        end_date:"2025-01-01"
    },
    {
        GUID:"4c4dfe24-eee3-491f-86d0-1c74f67d7430",
        owner:"f571ed6d-b9a6-4f3c-83d1-d0df89fe52ec",
        recipient:"2e73f2c1-5c26-4ec4-a361-20bc500936fa",
        contract_name:"trainer",
        frequency:"7",
        start_date:"2018-01-01",
        end_date:"2018-02-01"
    },
    {
        GUID:"5da44512-bcf2-4fe4-a16c-91b3614d475b",
        owner:"a0df0546-eac8-4971-ac91-1d31f66f2a22            ",
        recipient:"b231ad40-29ee-4de1-a662-c18e69a776cc            ",
        contract_name:"coach",
        frequency:"14",
        start_date:"2018-01-01",
        end_date:"2018-02-01"
    }
]


var express = require('express');
var app = express();

// adds "public" directory to the called directories
app.use(express.static("public"));

app.get("/c",function(reg, res){
    var posts = 
    [
      {title: "post 1", author:"susi"},
      {title: "post 2", author:"tom"},
    ]

    res.render("posts.ejs",{posts:posts});
})

app.get("/menu",function(reg, res){
    
    res.render("posts.ejs",{
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

