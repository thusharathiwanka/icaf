const users = require("../config/db.config");
const database = "conference";
const collection = "users";

const getAll = async () => {
	try {
		const cursor = await users.db(database).collection(collection).find();
		return cursor.toArray();
	} catch {
		return error;
	}
};

const save = async (newUser) => {
	try {
		const cursor = await users.db(database).collection(collection).find();
		return cursor.toArray();
	} catch {
		return error;
	}
};

module.exports = { save, getAll };
