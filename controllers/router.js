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
router.get("/scrape", (req, res) => {
    const scrapeArray = [];

    axios.get("https://www.theregister.co.uk/").then((response) => {

        const $ = cheerio.load(response.data);

        $("article").each((i, element) => {

            const section = $(element).find(".section_name").text().trim();

            if (section.length === 0) {
                return;
            }

            const title = $(element).find("h4").text().trim();
            const link = `https://www.theregister.co.uk${$(element).find("a").attr("href")}`;
            const article = {
                headline: title,
                section: section,
                link: link
            };

            scrapeArray.push(article);
        });
        const hbrs = { data: scrapeArray };
        res.render("index", hbrs);
    });
});
router.get("/saved", (req, res) => { });
router.get("/saved/:id", (req, res) => { });
// Posts
router.post("/save", (req, res) => { });
router.post("/comment", (req, res) => { });
// Puts

// Deletes
router.delete("/article/:id", (req, res) => { });
router.delete("/comment/:id", (req, res) => { });

module.exports = router;