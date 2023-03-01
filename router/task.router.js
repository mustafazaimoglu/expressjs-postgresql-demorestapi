var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.send({ message: "API still works! - TASKS" });
});

module.exports = router;
