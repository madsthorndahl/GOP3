
//Bestemmer hvilket packeages der skal bruges
var express = require("express");
var cors = require("cors");
var app = express();


app.use(cors())
//Bestemmer hvilket response der skal være når der er sendt et GET reques
app.get('/',function(req,res){
    res.send("Hello world!");
});

//Bestemmer hvilken port der skal lyttes på
app.listen(5000,function(){

console.log("Server running on port 5000")

})





# GOP3
