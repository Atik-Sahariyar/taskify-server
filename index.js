const http = require("http");
const app = require("./app");
const connectToDB = require("./rsc/config/database");
const { serverPort } = require("./rsc/secret");
const server = http.createServer(app);

const main = async () => {
  await connectToDB();
  server.listen(serverPort, () => {
    console.log(
      `Taskify server is running on: http://localhost:${serverPort}`
    );
  });
};

main();
