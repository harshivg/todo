const express = require('express');
const { createTodoSchema, updateTodoSchema } = require('./types');
const { todo } = require('./db');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.parse(createPayload);
    
    if(!parsedPayload) {
        return res.status(411).send("Invalid inputs");
    }

    await todo.create({
        title: parsedPayload.title,
        description: parsedPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
    
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json(todos);
})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid inputs"
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as done"
    })
})  

app.put("/uncompleted", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.parse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid inputs"
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: false
    })

    res.json({
        msg: "Todo marked as not done"
    })
})

app.listen(3000, function () {
    console.log("Server is running");
});