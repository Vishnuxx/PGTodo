const express = require("express");
const cors = require("cors");
const {PORT} = require("./src/config/envs")
const pool = require("./src/config/db")
const app = express();

app.use(cors());
app.use(express.json())

app.get("/" , (req , res ) => {
    res.send("success")
})


app.listen(PORT , () => {
    console.log(`server is listening at port ${PORT}`)
})