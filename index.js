const express = require("express");
const HTTP_SERVER = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Port = 5000;
const HOSTNAME = "0.0.0.0";
const {connectDatabase} = require("./dbConfigure");

// Enable Cors
HTTP_SERVER.use(cors());

// Enable Body Parser
HTTP_SERVER.use(bodyParser.json());

// Inject APP SERVER
HTTP_SERVER.use("/", require("./app"));

// Listening To Server
HTTP_SERVER.listen(Port, HOSTNAME, () => {
    console.log(`Server Started Listening at ${Port}`);
    connectDatabase();
})