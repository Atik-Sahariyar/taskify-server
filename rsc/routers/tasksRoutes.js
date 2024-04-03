const express = require("express");
const { getMyTasks, getOneTask, postNewTask, updateTask, deleteTask } = require("../controllers/tasksControllers");
const verifyToken = require("../middlewares/verifyToken");
const tasksRouter = express.Router();





// get my tasks by email;
tasksRouter.get("/tasks/:email", verifyToken, getMyTasks);

// get one task by id;
tasksRouter.get("/task/:id", verifyToken, getOneTask);


// create a new  task ;
tasksRouter.post("/tasks",verifyToken, postNewTask);


// update a task   by id;
tasksRouter.patch("/task/:id",verifyToken, updateTask);

// delete a task by id
tasksRouter.delete("/task/:id",verifyToken, deleteTask);


module.exports = tasksRouter