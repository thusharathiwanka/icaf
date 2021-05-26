const users = require("../config/db.config")
	.db("conference")
	.collection("users");

console.log(users);

module.exports = users;
