const { PORT ,HOST } = require("./envs");

const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  password: "",
  host: DB_HOST,
  port: DB_PORT,
  database: "pgtodo",
});

module.exports = pool