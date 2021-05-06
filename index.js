const express = require("express");
const app = express();
const AWS = require("aws-sdk");
var uuid = require("uuid");

// Credentials for AWS account
var credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
AWS.config.credentials = credentials;

// Create unique bucket name

app.listen(80, () => {
  console.log("Listening on http://localhost:80");
});
