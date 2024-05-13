const {
    createPeopleAccount,
    getAllPeople
    } = require("../Controllers/peopleController");

const PeopleRouter = require("express").Router();

// Access People Details
PeopleRouter.get("/", getAllPeople);

// Create People Details
PeopleRouter.post("/create", createPeopleAccount);

module.exports = PeopleRouter;