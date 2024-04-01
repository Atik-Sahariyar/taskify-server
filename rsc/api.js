const express = require("express");
const usersRouter = require("./routers/usersRoutes");
const router = express.Router();

// Import all routers
const routers = [
  require("./routers/usersRoutes"), 
  
];

// Dynamically apply routers
routers.forEach((route) => router.use(route));


module.exports = router;
