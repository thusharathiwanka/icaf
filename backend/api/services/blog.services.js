const blogs = require("../config/db.config");
const database = "conference";
const collection = "blogs";

const getAll = async () => {
	try {
		const cursor = await blogs.db(database).collection(collection).find();
		return cursor.toArray();
	} catch (error) {
		return error;
	}
};

module.exports = { getAll };
