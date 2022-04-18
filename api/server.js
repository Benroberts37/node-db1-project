const express = require("express");

const accountsRouter = require('./accounts/accounts-router')

const server = express();

server.use('/api/accounts, accountsRouter')

server.use(express.json());

module.exports = server;
