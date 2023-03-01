const express = require("express");
const router = express.Router();
const taskRouter = require("./task.router");

router.get("/", (req, res) => {
    res.send({ message: "API works!" });
});

router.use("/tasks", taskRouter);

module.exports = router;
