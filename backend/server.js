const express = require("express");
const app = express();
const userRoutes = require("./api/routes/user.routes");
require("./api/controllers/db.config");

// Middleware
app.listen(3000);

app.use("/users", userRoutes);

app.get("/", (request, response) => {
	response.send("Hello");
});
