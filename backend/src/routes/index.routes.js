const express = require('express');
const router = express.Router();
const Task = require("../models/Task");

router.get("/tasklist", async (req,res) => {
    const tasks = await Task.find().sort({data: 1});
    res.json(tasks);
});

router.post("/add", async (req,res) => {
    var { title, description, data } = req.body;
    var task = new Task({title,description, data});
    await task.save();
    res.json("añadido");
});

router.delete("/delete/:id", async (req,res) =>{
    await Task.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;