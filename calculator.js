//jshint version7
const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req, res)
{
  res.sendFile(__dirname + "/index.html");

});
app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);


  var result = Number(num1 + num2);
  res.send("Thanks for posting " +  result);
});

app.get("/bmicalculator", function(req, res)
{
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res)
{
  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);
  var result = w / (h*h);
  res.send(" toal value is: " + result);

});














app.listen(3000, function()
{
  console.log("server runs on port 3000 .");
});
