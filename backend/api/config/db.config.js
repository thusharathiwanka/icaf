const { MongoClient } = require("mongodb");
const CONNECTION_URL =
	"mongodb+srv://admin:admin@123@cluster0.jwjjo.azure.mongodb.net/conference?retryWrites=true&w=majority";
const database = "conference";

const client = new MongoClient(CONNECTION_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((error) => {
	if (error) {
		console.log(error);
		process.exit(-1);
	}

	console.log("connected to mongodb");
});

module.exports = client;
