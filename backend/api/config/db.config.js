const MongoClient = require("mongodb").MongoClient;

const CONNECTION_URL =
	"mongodb+srv://admin:admin@123@cluster0.jwjjo.azure.mongodb.net/conference?retryWrites=true&w=majority";

const client = new MongoClient(CONNECTION_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((error) => {
	if (error) {
		console.log(error.message);
		process.exit(-1);
	}
	console.log("Connected to Mongodb");
});

module.exports = client;
