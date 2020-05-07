var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/BookStore");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});

var app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/insert", function (req, res) {
  var name = req.body.name;
  var author = req.body.author;
  var price = req.body.price;
  var desc = req.body.desc;

  var data = {
    name: name,
    author: author,
    price: price,
    desc: desc,
  };
  db.collection("users").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });

  return res.sendFile(__dirname + "/success.html");
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.sendFile(__dirname + "/add.html");
  })
  .listen(3001);

console.log("server listening at port 3001");