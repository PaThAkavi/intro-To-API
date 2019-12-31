var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search"); 
});

app.get("/results", function(req, res){
    var query = req.query.movie;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"; //DYNAMIC URL
    
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);          //CONVERING JSON STRING INTO OBJECT
            res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("MOVIE APP HAS STARTED");
});