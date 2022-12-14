const dbConnection = require("./dbConn");

todoModel.sync({ alter: true, force: true });
module.exports = todoModel;
