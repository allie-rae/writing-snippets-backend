const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/auth", authRouter);

module.exports = server;
