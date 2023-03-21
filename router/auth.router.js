var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
    res.send({ message: "AUTH" });
});

router.post("/login", (req, res) => {
    const demoUsername = process.env.DEMO_USERNAME;
    const demoPassword = process.env.DEMO_PASSWORD;
    const loginData = req.body;
    console.log(req.body);

    let returnData = {
        success: false,
        message:
            "Login Unsuccessfull! try {username:mustafa, password:zaimoglu}",
    };

    if (loginData === null || loginData === undefined) {
        res.json(returnData);
    } else {
        if (
            demoUsername === loginData.username &&
            demoPassword === loginData.password
        ) {
            returnData.success = true;
            returnData.message = "Login Successful!";
            returnData["token"] = generateAccessToken(loginData.username);
            res.json(returnData);
        } else {
            res.json(returnData);
        }
    }
});

router.get("/isLoggedIn", (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, tokenData) => {
        console.log(err);

        if (err) return res.sendStatus(403);

        console.log(tokenData);
        if (tokenData.username === process.env.DEMO_USERNAME) {
            res.send({
                success: true,
                message: "User Logged In",
            });
        }
    });

    res.send({
        success: false,
        message: "User Not Logged In",
    });
});

function generateAccessToken(username) {
    return jwt.sign({ username }, process.env.TOKEN_SECRET, {
        expiresIn: "10h",
    });
}

module.exports = router;
