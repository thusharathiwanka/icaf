const users = require("../config/db.config");
const database = "conference";
const collection = "users";

const getAll = async () => {
	try {
		const cursor = await users.db(database).collection(collection).find();
		return cursor.toArray();
	} catch (error) {
		return error;
	}
};

const save = async (newUser) => {
	try {
		return await users.db(database).collection(collection).save(newUser);
	} catch (error) {
		return error;
	}
};

module.exports = { getAll, save };
