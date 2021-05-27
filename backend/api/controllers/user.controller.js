const users = require("./db.config");
const database = "conference";
const collection = "users";

const saveUser = async ({}) => {};

const getAllUsers = async () => {
	try {
		const cursor = await users.db(database).collection(collection).find();
		return cursor.toArray();
	} catch {
		return error.message;
	}
};

module.exports = { saveUser, getAllUsers };
