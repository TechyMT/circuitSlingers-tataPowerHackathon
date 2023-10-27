const { Client } = require("pg");
const fs = require("fs");

const configDev = {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  port: process.env.POSTGRES_PORT,
  // connectionTimeoutMillis: 2000,
  password: process.env.POSTGRES_PASSWORD,
  database: "hackathon",
};

const client = new Client(configDev);

module.exports = client;
