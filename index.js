const express = require("express");
const projectsRouter = require("./projects/projects-router");
const welcomeRouter = require("./projects/welcome-router");

const server = express();
const port = 4000;

server.use(express.json());
server.use("/", welcomeRouter);
server.use("/projects", projectsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
