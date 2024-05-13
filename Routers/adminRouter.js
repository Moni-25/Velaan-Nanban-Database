const {
    getAdmin,
    } = require("../Controllers/adminController");

const AdminRouter = require("express").Router();

// Access Admin
AdminRouter.get("/", getAdmin);

module.exports = AdminRouter;