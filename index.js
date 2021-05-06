const express = require("express");
const app = express();
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");
const routes = require("./router/router");

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/", routes);

//
app.listen(80);
