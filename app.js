//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      res.render("list", {kindOfDay: "Sunday"});
    break;
    case 1:
      res.render("list", {kindOfDay: "Monday"});
    break;
    case 2:
      res.render("list", {kindOfDay: "Tuesday"});
    break;
    case 3:
      res.render("list", {kindOfDay: "Wednesday"});
    break;
    case 4:
      res.render("list", {kindOfDay: "Thursday"});
    break;
    case 5:
      res.render("list", {kindOfDay: "Friday"});
    break;
    case 6:
      res.render("list", {kindOfDay: "Saturday"});
    break;

    default:

  }


});

app.listen(3000, function(req, res){
  console.log("Server started at port 3000.");
});
