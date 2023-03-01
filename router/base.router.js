const express = require("express");
const router = express.Router();
const taskRouter = require("./task.router");

const taskRepository = require("../repository/task.repository");

router.get("/", async (req, res) => {
    task = {
        title: "task4",
        description: "t4",
        is_finished: true,
    };
    result = await taskRepository.addTask(task);
    console.log(result);
    res.send(result);
    // res.send({ message: "API works!" });
});

router.use("/tasks", taskRouter);

module.exports = router;
