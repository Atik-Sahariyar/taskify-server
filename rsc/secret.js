require("dotenv").config();
const serverPort = process.env.SERVER_RUNNING_PORT || 5000;

const mongodbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m4j1j7e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = { serverPort, mongodbURL };

