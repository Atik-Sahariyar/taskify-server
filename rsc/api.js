const express = require("express");
const router = express.Router();

// Import all routers
const usersRoutes = require("./routers/usersRoutes");
const tasksRoutes = require("./routers/tasksRoutes");
const jwtRoute = require("./routers/jwtRoute");

// Apply routers
router.use(usersRoutes);
router.use(tasksRoutes);
router.use(jwtRoute);

module.exports = router;
