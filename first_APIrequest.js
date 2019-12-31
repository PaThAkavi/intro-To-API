// var request = require("request");
// request("http://www.google.com", function(error, response, body){
//     if(error){
//         console.log("SOMETHING WENT WRONG!");
//         console.log(error);
//     } else{
//         if(response.statusCode == 200){
//           //things worked
//           console.log(body);
//         }
//     }
// });


//YAHOO API LINK IS USED(weather in Hawaii)

console.log("SUNSEET IN HAWAII IS AT..")

var request = require("request");
request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(error, response, body){
    if(!error && response.statusCode == 200){
          //things worked
          var parsedData = JSON.parse(body);  //converts body from 'string' to an 'object'(cuz json file by default consists of 'string')
          console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
    }
});