// Node modules
const mongoose = require("mongoose");
const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");
const cheerio = require("cheerio");

// ORM
const routes = require("./controllers/router");
const db = require("./models");

//Connections
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
const PORT = process.env.PORT || 3000;

// Initialize app
const app = express();

// JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// public folder
app.use(express.static("public"));
// router
app.use(routes);
// view engine init
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect(MONGODB_URI);

//// DB
// Table: article
// Headline
// Summary
// URL
// extra content?
// comments (hasMany)
//
// Table: comments
// comment
// article (belongsTo)
//
// Table: users (maybe)
// username
// comments (hasMany)

//// Routes
// get (scrape)
// get (show db contents)
// get (show article comments)
// post (add comment)
// delete (comment)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});