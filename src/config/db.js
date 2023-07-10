const { PORT ,HOST } = require("./envs");

const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgress",
    password:"",
    host: HOST,
    port : PORT,
    database: "pgtodo"
});

module.exports = pool