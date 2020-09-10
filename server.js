const express = require("express");
// const bodyParser = require("body-parser");
const path = require("path");
const app = express();
require("dotenv").config();
app.use(express.static(path.join(__dirname, "build")));

const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`;

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/todos/:id", async function (req, res) {
  const getTodo = req.params.id;
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("local");

  const todoData = await db.collection("todos").findOne({ id: getTodo });
  console.log("todoData ", todoData);
  res.status(200).send(todoData);
});

app.listen(process.env.PORT || 8080);
