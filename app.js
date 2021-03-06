"use strict";

const express = require("express");
const app = express();
const home = require("./routes/home");

//앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/public`));
app.use("/", home);

module.exports = app;