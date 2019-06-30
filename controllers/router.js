const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const db = require("../models");

const router = express.Router();

//// Routes
// get (scrape)
// get (show db contents)
// get (show article comments)
// post (add comment)
// delete (comment)

// Gets
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/scrape", (req, res) => {});
router.get("/saved", (req, res) => {});
router.get("/saved/:id", (req, res) => {});
// Posts
router.post("/save", (req, res) => {});
router.post("/comment", (req, res) => {});
// Puts

// Deletes
router.delete("/article/:id", (req, res) => {});
router.delete("/comment/:id", (req, res) => {});

module.exports = router;