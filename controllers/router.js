const express = require("express");
const db = require("../models");

const router = express.Router();

// Gets
router.get("/", (req, res) => {});
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