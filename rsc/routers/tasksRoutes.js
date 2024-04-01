const express = require("express");
const { getMyTasks, getOneTask, postNewTask, updateTask, deleteTask } = require("../controllers/tasksControllers");
const tasksRouter = express.Router();


// get my tasks by email;
tasksRouter.get("/tasks/:email", getMyTasks);

// get one task by id;
tasksRouter.get("/tasks/:id", getOneTask);


// create a new  task ;
tasksRouter.post("/tasks", postNewTask);


// update a task   by id;
tasksRouter.patch("/tasks/:id", updateTask);

// delete a task by id
tasksRouter.delete("/tasks/:id", deleteTask);


module.exports = tasksRouter