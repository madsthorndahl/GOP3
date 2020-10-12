
//Bestemmer hvilket packeages der skal bruges
var express = require("express");
var cors = require("cors");
var app = express();

// Funktion til at tælle op for hvert gang funktionen er kaldt
var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
  })();


app.use(cors())
//Bestemmer hvilket response der skal være når der er sendt et GET reques
app.get('/',function(req,res){
res.send("Hello world!" + " " + add())
});

//Bestemmer hvilken port der skal lyttes på
app.listen(5000,function(){

console.log("Server running on port 5000")

})





# GOP3
