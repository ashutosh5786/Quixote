const express = require("express");
const router = express.Router();
const upload = require("./upload");
const getAll = require("./getAll");

//Default routes
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/api/getAll", getAll);

//routing for upload
router.post("/api/upload", upload);

module.exports = router;
