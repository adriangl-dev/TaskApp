const express = require('express');
const TaskController = require('../controllers/task.controller');
const router = express.Router();
const Task = require("../models/Task");

router.get("/tasklist",TaskController.getAllTask);

router.get("/task/:id",TaskController.getTask);

router.post("/add",TaskController.createTask);

router.post("/edit/:id",TaskController.editTask);

router.delete("/delete/:id",TaskController.deleteTask);

module.exports = router;