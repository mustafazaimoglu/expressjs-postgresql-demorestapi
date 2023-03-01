const express = require("express");
const router = express.Router();
const taskRouter = require("./task.router");

const taskRepository = require("../repository/task.repository");

router.get("/", async (req, res) => {
    task = {
        id:6,
        title: "waaaaow",
        description: "medina",
        is_finished: true,
    };
    // result = await taskRepository.addTask(task);
    result = await taskRepository.updateTask(task);
    console.log(result);
    res.send(result);
    // res.send({ message: "API works!" });
});

router.use("/tasks", taskRouter);

module.exports = router;
