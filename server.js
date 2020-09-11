const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(cors());
require("dotenv").config();
app.use(express.static(path.join(__dirname, "build")));

const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`;

app.get("/", function (req, res) {
  return res.send("Hello");
});
app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/todos", async function (req, res) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("local");

  db.collection("todos")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

app.listen(process.env.PORT || 8080);
