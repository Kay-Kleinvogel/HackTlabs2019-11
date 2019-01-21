var contracts = [{
	"GUID": "ce2b4753-dd64-4e30-8063-2194814d982f",
	"owner": "9c3fc7bd-3feb-4c9d-9770-e40d5991ba90",
	"recipient": "a1624e68-d048-4d05-9255-a85aa5293a67",
	"contract_name": "doctor",
	"frequency": "30",
	"start_date": "2018-01-01",
	"end_date": "2020-01-01"
}, {
	"GUID": "e7818820-a0c6-4d17-a103-739bbc05d399",
	"owner": "c35ee732-fa57-4d18-9707-9b0712c0cfde",
	"recipient": "9e2c6878-66c4-4118-a800-e34fda655626",
	"contract_name": "insurance",
	"frequency": "364",
	"start_date": "2018-01-01",
	"end_date": "2025-01-01"
}, {
	"GUID": "4c4dfe24-eee3-491f-86d0-1c74f67d7430",
	"owner": "f571ed6d-b9a6-4f3c-83d1-d0df89fe52ec",
	"recipient": "2e73f2c1-5c26-4ec4-a361-20bc500936fa",
	"contract_name": "trainer",
	"frequency": "7",
	"start_date": "2018-01-01",
	"end_date": "2018-02-01"
}];

var express = require('express');
var app = express();

// adds "public" directory to the called directories
app.use(express.static("public"));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Demo_Transaction_Data.TlabsHack";

// Connect to the db
MongoClient.connect(url, function (err, db) {

	if (err) throw err;
	console.log("DEBUG: Database connected")
	//Write databse Insert/Update/Query code here..

});

app.get("/menu", function (reg, res) {

	res.render("menu.ejs", {
		contracts: contracts
	})
	console.log("User visited /menu");
});

// leave this at the bottom since it's the catch all response
app.get('/*', function (req, res) {
	res.render("splash.ejs")
	console.log("User visited /");
});

// is now only accessible through ip address
app.listen(3000,'localhost', function () {
	console.log('Application worker ' + process.pid + ' started...');
}
);

