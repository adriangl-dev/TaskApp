const express = require('express');
const router = express.Router();
const Task = require("../models/Task");

router.get("/tasklist", async (req,res) => {
    const tasks = await Task.find().sort({data: 1});
    res.json(tasks);
});

router.get("/task/:id", async (req,res) => {
    await Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(error => res.status(400).json("Error: "+error));
});

router.post("/add", async (req,res) => {
    var { title, description, data } = req.body;
    var task = new Task({title,description, data});
    await task.save();
    res.json("Task added OK");
});

router.post("/edit/:id", async (req,res) => {
    await Task.findById(req.params.id)
    .then(task => {
        task.title = req.body.title;
        task.description = req.body.description;
        task.data = Date.parse(req.body.data);
        task.save()
        .then(() => res.json("Task updated OK"))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete("/delete/:id", async (req,res) =>{
    await Task.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task deleted OK'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;