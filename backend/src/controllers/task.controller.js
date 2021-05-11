const TaskController = {};
const Task = require("../models/Task");

TaskController.getAllTask = async (req,res) => {
    await Task.find().sort({data: 1})
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json({
        Action: "Get all tasks",
        Result: "KO",
        Error: err
    }));
}

TaskController.getTask = async (req,res) => {
    await Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json({
        Action: "Get task",
        Result: "KO",
        Error: err
    }));
}

TaskController.createTask = async (req,res) => {
    var { title, description, data } = req.body;
    var task = new Task({title,description, data});
    await task.save()
    .then(() => res.json({
        Action: "Create task",
        Result: "OK",
        Task: task
    }))
    .catch(err => res.status(400).json({
        Action: "Create task",
        Result: "KO",
        Error: err
    }));
}

TaskController.editTask = async (req,res) => {
    await Task.findById(req.params.id)
    .then(task => {
        task.title = req.body.title;
        task.description = req.body.description;
        task.data = Date.parse(req.body.data);
        task.save()
        .then(() => res.json({
            Action: "Edit task", 
            Result: "OK", 
            Task: task
        }))
        .catch(err => res.status(400).json({
            Action: "Edit task",
            Result: "KO",
            Error: err
        }));
    }).catch(err => res.status(400).json('Error: ' + err));
}

TaskController.deleteTask = async (req,res) =>{
    await Task.findByIdAndDelete(req.params.id)
    .then(() => res.json({
        Action: "Delete task", 
        Result: "OK"
    }))
    .catch(err => res.status(400).json({
        Action: "Delete task",
        Result: "KO",
        Error: err
    }));
}

module.exports = TaskController;