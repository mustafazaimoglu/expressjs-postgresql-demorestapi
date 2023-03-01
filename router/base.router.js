const express = require("express");
const router = express.Router();
const taskRouter = require("./task.router");
const db = require("../config/db.config");

router.get("/", (req, res) => {
    const Tasks = db.users;
    res.send({ message: "API works!" });
});

router.use("/tasks", taskRouter);

module.exports = router;
