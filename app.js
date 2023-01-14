const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const port = 3000;
const app = express();

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
})