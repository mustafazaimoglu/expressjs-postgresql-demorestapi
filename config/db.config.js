const { Sequelize, DataTypes } = require("sequelize");

const host = process.env.HOST;
const userName = process.env.USER;
const password = process.env.PASSWORD;
const databaseName = process.env.DB_NAME;
const databasePort = process.env.DB_PORT;
const dialect = process.env.DIALECT;

const sequelize = new Sequelize(
    `postgres://${userName}:${password}@${host}:${databasePort}/${databaseName}`,
    { dialect }
);

//checking if connection is done
sequelize
    .authenticate()
    .then(() => {
        console.log(`Database connection successfull!`);
    })
    .catch((err) => {
        console.log("Database connection ERROR!" + err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
db.users = require("../model/task.model")(sequelize, DataTypes);

//exporting the module
module.exports = db;
