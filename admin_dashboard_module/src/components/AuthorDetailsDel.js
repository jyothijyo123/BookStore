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
module.exports = function (router) {
  router.get('/AuthorDetailsDel', AuthorDetailsDel);
}
app.post("/del", function (req, res) {
  db.collection("users").deleteOne({ name: req.body.name }, function (
    err,
    collection
  ) {
    if (err) throw err;
    console.log("Record deleted Successfully");
  });

  return res.sendFile(__dirname + "/success.html");
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.sendFile(__dirname + "/AuthDel.html");
  })
  .listen(3001);

console.log("server listening at port 3001");