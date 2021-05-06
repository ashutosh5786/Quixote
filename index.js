const express = require("express");
const app = express();
const AWS = require("aws-sdk");
var uuid = require("uuid");

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
const params = {
  Bucket: "38e227e6-4956-480f-8bc7-655a34ca0e28",
  ACL: "public-read",
  CreateBucketConfiguration: {
    LocationConstraint: "ap-south-1",
  },
};
try {
  s3.createBucket(params, function (err, data) {
    console.log("Succefully Created" + data);
  });
} catch (err) {}

app.listen(80);
