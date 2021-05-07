const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
const AWS = require("aws-sdk");

// Set the region
AWS.config.update({ region: "ap-south-1" });
// const { s3 } = require("aws-sdk");

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// Credentials for AWS account
var credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
AWS.config.credentials = credentials;

// Create unique bucket name
// const bucketName = uuid.v4();

try {
  s3.createBucket(
    {
      //params
      Bucket: "38e227e6-4956-480f-8bc7-655a34ca0e28",
      ACL: "public-read",
      CreateBucketConfiguration: {
        LocationConstraint: "ap-south-1",
      },
    },
    function (err, data) {
      console.log("Succefully Created" + data);
    }
  );
} catch (err) {}

const upload = multer({
  limits: { fileSize: 125000 },
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "38e227e6-4956-480f-8bc7-655a34ca0e28",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      // Set the filetypes
      var filetypes = /jpeg|png/;
      var mimetype = filetypes.test(file.mimetype);
      var extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
      );

      if (mimetype && extname) {
        return cb(null, file.originalname);
      }
      cb(null, false);
    },
  }),
}).array("photos", 10);

// Post for handling the Request
router.post("/api/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) res.send("File must be photo(png/jpg/jpeg) and less than 1MB");
    else res.render("upload");
  });
});

//exorting the routes
module.exports = router;
