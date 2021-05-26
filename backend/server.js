const express = require("express");
const app = express();
require("./api/config/db.config");
const userRoutes = require("./api/routes/user.routes");

// Middleware
app.use("/users", userRoutes);

app.get("/", (request, response) => {
	response.send("Hello");
});

app.listen(3001);
