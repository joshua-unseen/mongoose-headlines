// Node modules
let express = require("express");
let mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

// ORM
var db = require("./models");

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
let PORT = process.env.PORT || 3000;

let app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


mongoose.connect(MONGODB_URI);

// Headline
// Summary
// URL
// extra content?
// comments