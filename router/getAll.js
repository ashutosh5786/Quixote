const express = require("express");
const router = express.Router();
const AWS = require("aws-sdk");

// Comfiguring the RegionS
AWS.config.update({ region: "ap-south-1" });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// Credentials for AWS account
var credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
AWS.config.credentials = credentials;

// Getting the form request
router.post("/api/getAll", (res, req) => {
  s3.listObjectsV2(
    { Bucket: "38e227e6-4956-480f-8bc7-655a34ca0e28" },
    (err, obj) => {
      if (err) console.log(err);
      else console.log(data);
    }
  );
});
//exorting the routes
module.exports = router;
