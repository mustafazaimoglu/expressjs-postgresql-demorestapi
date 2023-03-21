const express = require("express");
const router = express.Router();
const taskRouter = require("./task.router");
const authRouter = require("./auth.router");

router.get("/", (req, res) => {
    res.send({ message: "API works!" });
});

router.use("/tasks", taskRouter);
router.use("/auth", authRouter);

module.exports = router;
