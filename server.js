const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 8000;

// testing directory 
// found join docs here https://www.w3schools.com/nodejs/met_path_join.asp
// and here https://expressjs.com/en/starter/static-files.html
const mainDirectory = path.join(__dirname, "/public");

//next step is joining user notes to server

//references used
//https://www.geeksforgeeks.org/express-js-express-json-function/

app.use(express.static('public'));

//reference here https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(mainDirectory, "index.html"));
})

app.get("/notes", function(req, res) {
    res.sendFile(path.join(mainDirectory, "notes.html"));
})

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
})

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})