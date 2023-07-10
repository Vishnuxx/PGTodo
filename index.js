const express = require("express");
const cors = require("cors");
const {PORT} = require("./src/config/envs")
const pool = require("./src/config/db");
const { createTodo } = require("./src/models/query");
const app = express();

app.use(cors());
app.use(express.json())

app.get("/" , (req , res ) => {
    res.send("success")
})

//post todo
app.post("/todo/create" , async (req , res)=> {
    try {
        const {description} = req.body
        const newtodo = await createTodo(pool , description);
        res.json(newtodo.rows[0]);
    } catch (error) {
        console.log(error.message);
        res.status(500);
    }
})

//get todo
app.get("/todo/:id" , (req , res)=> {
    res.send(req.params)
});



app.listen(PORT , () => {
    console.log(`server is listening at port ${PORT}`)
})