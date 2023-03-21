const express = require("express");
require("dotenv").config();
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const router = require("./router/base.router");
const generalMiddleware = require("./middleware/general.middleware");

app.use(generalMiddleware); // for just exercise
app.use("/api/", router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
