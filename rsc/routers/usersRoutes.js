const express = require("express");
const { postUserController } = require("../controllers/usersControllers");
const usersRouter = express.Router();

// create a new user 
usersRouter.post("/users", postUserController);


module.exports = usersRouter