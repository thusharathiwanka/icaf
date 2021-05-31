const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const supertest = require("supertest");

const attendeeRoutes = require("./api/routes/attendee.routes");
const researcherRoutes = require("./api/routes/researcher.routes");
const presenterRoutes = require("./api/routes/presenter.routes");
const publicationRoutes = require("./api/routes/publication.routes");
const workshopRoutes = require("./api/routes/workshop.routes");
const blogRoutes = require("./api/routes/blog.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/attendee", attendeeRoutes);
app.use("/researcher", researcherRoutes);
app.use("/presenter", presenterRoutes);
app.use("/publication", publicationRoutes);
app.use("/workshop", workshopRoutes);
app.use("/blog", blogRoutes);

const CONNECTION_URL =
	"mongodb+srv://admin:admin@123@cluster0.jwjjo.azure.mongodb.net/conference?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		app.listen(PORT, () =>
			console.log(`mongodb synced and listening on port ${PORT}`)
		);
	})
	.catch((error) => {
		console.log(error.message);
	});

app.get("/", (request, response) => {
	response.send(
		"International Conference on Application Frameworks | ICAF API"
	);
});
