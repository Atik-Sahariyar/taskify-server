const express = require("express");
const router = express.Router();

// Import all routers
const usersRoutes = require("./routers/usersRoutes");
const tasksRoutes = require("./routers/tasksRoutes");

// Apply routers
router.use(usersRoutes);
router.use(tasksRoutes);

module.exports = router;
