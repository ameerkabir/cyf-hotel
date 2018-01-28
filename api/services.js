const express = require("express");
const router = express.Router();

const app = express();

const customers = require("../public/data/services.json");

var port = app.get("/services", (req, res) => {
    res.send("customer is getting happier");

});
app.listen("the server is listening on" + port);
