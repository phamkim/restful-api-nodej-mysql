require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routers/bangDia.router")(app);

app.listen(port);

console.log("RESTful API server started on: " + port);
