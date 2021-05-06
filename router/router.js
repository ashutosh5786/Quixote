const express = require("express");
const router = express.Router();
const upload = require("./upload");

//Default routes
router.get("/", (req, res) => {
  res.render("index");
});

//routing for upload
router.post("/api/upload", upload);

module.exports = router;
