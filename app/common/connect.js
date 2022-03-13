const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db;

// const Sequelize = require("sequelize");

// // Option 1: Passing parameters separately
// const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, null, {
//   host: process.env.HOST,
//   dialect: process.env.DIALECT,
//   logging: false,
// });

// let connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// module.exports = connectDB;
