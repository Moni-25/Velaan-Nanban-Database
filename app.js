const express = require("express");
const APP_SERVER = express();

// Inject All Routers
APP_SERVER.use("/api/admin", require("./Routers/adminRouter"));
APP_SERVER.use("/api/people", require("./Routers/peopleRouter"));

module.exports = APP_SERVER;