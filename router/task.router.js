var express = require("express");
var router = express.Router();
const taskController = require('../controller/task.controller')

router.get("/", (req, res) => {
    res.send({ message: "API still works! - TASKS" });
});

router.get("/getAll", (req,res) => {
    taskController.getTasks().then(data => res.json(data));
});

router.post("/add", (req,res) => {
    let tempData = req.body;
    taskController.addTask(tempData).then(data => res.json(data))
});

router.post("/update", (req,res) => {
    let newData = req.body;
    taskController.updateTask(newData).then(data => res.json(data))
});

router.post("/delete/:id", (req,res) => {
    let taskId = req.params.id;
    taskController.deleteTask(taskId).then(data => res.json(data))
});

module.exports = router;
